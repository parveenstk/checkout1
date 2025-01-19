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
// formStore
const formStore = useFormStore();
// cartStore
const cartStore = useCartStore();

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

// importClick()

// queryCampaign API Handler
const queryCampaign = async () => {
  const apiUrl = "/api/queryCampaign";

  try {
    const response = await fetch(apiUrl); // Make a GET request `
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    // console.log("data :", data);

    // Products
    const Products = data.message.data["65"].products;
    const shippingMethods = data.message.data["65"].shipProfiles;
    // const shipPrice = data.message.data["65"].shipProfiles.rules.shipPrice
    checkoutStore.shippingMethods(shippingMethods);
    // console.log("ShippingMethods :", shippingMethods);
    // console.log("Products :", Products);
    checkoutStore.addAllProducts(Products);

    // Shipping Guarantee
    const shippingGuarantee = data.message.data["65"].products[0];
    // console.log("shippingGuarantee", shippingGuarantee);

    // VIP Customer Benefits
    const vipCustomerBenefits = data.message.data["65"].products[11];
    // console.log("vipCustomerBenefits", vipCustomerBenefits);

    // Countries
    const countries = data.message.data["65"].countries;
    await checkoutStore.setCountryList(countries);
    await checkoutStore.updateStates();
    checkoutStore.billingUpdateStates();

    // add shipGuard
    cartStore.addProduct(3817);
  } catch (error) {
    console.error("Error:", error);
  }
};

// queryCampaign();

</script>
