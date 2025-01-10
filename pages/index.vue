<template>
  <CheckoutHeader />
  <FormHead />
  <Main />
  <FormFooter />
</template>

<script setup lang="ts">
import { CheckoutHeader, FormHead, FormFooter, Main } from "~/components/export";


// Checkout Store
const checkoutStore = useCheckoutStore();

// importClick handler
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


// queryCampaign Handler

const queryCampaign = async () => {
  const apiUrl =
    "/api/queryCampaign";

  try {
    const response = await fetch(apiUrl); // Make a GET request `
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    const Products = data.message.data["65"].products;
    checkoutStore.addAllProducts(Products);
    console.log("Products:", Products);
  } catch (error) {
    console.error("Error:", error);
  }
};

queryCampaign();

</script>
