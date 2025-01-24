<template>
  <div class="lg:w-6/12 sm:w-full w-full">
    <div class="b-shadow">
      <p class="text-1xl font-poppins font-regular text-center mb-2">Customer Information</p>
      <div class="bg-white rounded-lg">
        <table class="table-auto w-full">
          <thead>
            <tr class="">
              <td class="border-b border-gray-300 px-2 py-2 text-left w-b">Contact Information</td>
              <td class="border-b border-gray-300 px-2 py-2 text-left w-b">{{emailAddress}}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border-b border-gray-300 px-2 py-2 text-left w-b">Payment Method</td>
              <td class="border-b border-gray-300 px-2 py-2 text-left w-b">{{ paySource }}</td>
            </tr>
            <tr class="">
              <td class="border-b border-gray-300 px-2 py-2 text-left w-b">Shipping Address</td>
              <td class="border-b border-gray-300 px-2 py-2 text-left w-b">{{ shippingAddress }}</td>
            </tr>
            <tr class="">
              <td class="border-b border-gray-300 px-2 py-2 text-left w-b">Billing Address</td>
              <td class="border-b border-gray-300 px-2 py-2 text-left w-b">{{ billingAddress }}</td>
            </tr>
            <tr class="">
              <td class="border-gray-300 px-2 py-2 text-left w-b">Shipping Method</td>
              <td class="border-gray-300 px-2 py-2 text-left w-b">{{ shippingMethod }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

const {shippingAddress,paySource,emailAddress,shippingMethod,billingAddress}=await getOrderDetails();

</script>
<style>
.b-shadow {
  box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.12);
  background: #FAFAFA;
  padding: 10px;
  border-radius: 20px;
  margin: 10px;
}
.w-b{
    word-break: break-all;
    font-size: 12px;
}
</style>