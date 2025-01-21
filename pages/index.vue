<template>
  <CheckoutHeader />
  <FormHead />
  <Main />
  <FormFooter />
</template>

<script setup lang="ts">
import {
  CheckoutHeader,
  FormFooter,
  FormHead,
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
  const sessionId = sessionStorage.getItem("sessionId");
  const data = {
    ipAddress: formStore.formData.ip,
    sessionId: sessionId,
    pageType: "checkoutPage",
    requestUri: formStore.formData.salesUrl,
    campaignId: 65
  }
  const requestOptions = {
    method: "POST",
    body: JSON.stringify(data),
  };

  const response = await fetch("/api/importClick", requestOptions).then(
    (data) => data.json()
  );
  if (response.result === "SUCCESS") {
    sessionStorage.setItem("sessionId", response.message.sessionId);
  }
};

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

queryCampaign();

// Ip Address
const fetchIpInfo = async () => {
  try {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    // await fetch("https://ipinfo.io/json", requestOptions)
    const response = await fetch("https://ipinfo.io/json");
    const data = await response.json();
    return data.ip;
  } catch (error) {
    // throw new Error;
    console.error("Error fetching IP address:", error);
    return error;
  }
};


onMounted(async () => {
  formStore.formData.ip = await fetchIpInfo();
  formStore.formData.salesUrl = await getRequestUri();
  importClick();
})

</script>
