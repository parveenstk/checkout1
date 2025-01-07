<template>
  <CheckoutHeader />
  <FormHead />
  <Main />
  <FormFooter />
</template>

<script setup lang="ts">
import { CheckoutHeader, FormHead, FormFooter, Main } from "~/components";


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


// queryChampain handler
const queryChampain = () => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
}

</script>
