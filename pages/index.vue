<template>
  <CheckoutHeader />
  <FormHead />
  <Main />
  <FormFooter />
</template>

<script setup lang="ts">
import {
  CheckoutHeader,
  FormHead,
  FormFooter,
  Main,
} from "~/components/export";

// Checkout Store
const checkoutStore = useCheckoutStore();

// importClick API handler
const importClick = async () => {
  const requestOptions = {
    method: "POST",
    body: JSON.stringify({}),
  };

  const response = await fetch("/api/importClick", requestOptions).then(
    (data) => data.json()
  );
  if (response.result === "SUCCESS") {
    sessionStorage.setItem("sessionId", response.message.sessionId);
  }
};

importClick().then(() => {
  const id = sessionStorage.getItem("sessionId");
  console.log("Session ID:", id);
});

// queryCampaign API Handler
const queryCampaign = async () => {
  const apiUrl = "/api/queryCampaign";

  try {
    const response = await fetch(apiUrl); // Make a GET request `
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    // console.log("data :", data);

    // all products campaign
    const Products = data.message.data["65"].products;
    checkoutStore.addAllProducts(Products);
    // console.log("Products:", Products);

    //  all shipping methods
    const shippingMethods = data.message.data["65"].shipProfiles;
    // const shipPrice = data.message.data["65"].shipProfiles.rules.shipPrice
    checkoutStore.shippingMethods(shippingMethods);
    console.log("ShippingMethods :", shippingMethods);
  } catch (error) {
    console.error("Error:", error);
  }
};

queryCampaign();

// Courtry API Handler
const importCountry = async () => {
  const apiUrl = "/api/importCountry";

  try {
    const response = await fetch(apiUrl); // Make a GET request `
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    // console.log("data :", data);

    
    const values = Object.values(data);
    const usStates = values.filter(state => state.countryCode === "US")
    console.log("usStates :", usStates);

    


  } catch (error) {
    console.error("Error:", error);
  }
};

importCountry();

</script>
