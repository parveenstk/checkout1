<template>
    <section id="thankyouPage">
        <!-- <UpsellHeader :text="pageData.header" :classes="pageData.headerClass" /> -->
        <UpsellHeader />
    </section>
    <!-- <TyDescriptionHeader :phone="pageData.phone" /> -->
    <TyDescriptionHeader />
    <section>
        <div class="container lg:w-2/3 sm:w-full mx-auto p-2">
            <h1 class="text-center font-bold uppercase text-custom oswald"><span class="text-red-600">CONGRATS</span> -
                Order Complete!</h1>
            <p class="text-lg font-regular text-center mt-3 font-poppins">Within a few minutes you will receive an order
                confirmation email with your order ID.<br>
                Below you can find all the products you purchased...</p>
        </div>
        <div class="container lg:w-4/5 sm:w-full mx-auto p-2">
            <div class="flex flex-wrap mt-6">
                <TyCustomerInfo class="order-2 sm:order-1" />
                <TyProductReceipt class="order-1 sm:order-2" />
            </div>
        </div>
        <TyCheckResources />
    </section>
    <!-- <TyFooter :phone="pageData.phone" /> -->
</template>
<script lang="ts" setup>
import TyDescriptionHeader from '~/components/thankyou/TyDescriptionHeader.vue';

// const pageData = upsellConfig['thankYou'];
definePageMeta({
    layout: 'custom'
})
onMounted(async () => {
    // await checkSteps();
    // fbCAPI('Upsell3cv');
    // dataLayer('Upsell3cv');
    // storage.clearSession();
    // storage.clearLocal();
});

// const orderId:string|null = storage.getSessionItem('orderId');
// if(orderId)orderQuery(orderId);


</script>
<style scoped>
.bg-customRed {
    background-color: #E00000;
}

@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.countdown {
    background: #f2ffd6 !important;
    border-color: #c5d89c !important;
    border: 2px dashed;
    padding: 4px 10px;
    border-radius: 10px;
}

.yellow-bg {
    color: #FFB800;
    font-size: 20px;
}

.bg-yellow {
    background-color: #FFD431 !important;
    border: 2px solid transparent;
    color: #000;
}

.b-shadow {
    box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.12);
    background: #FAFAFA;
    padding: 10px;
    border-radius: 20px;
    margin: 10px;
}

.w-b {
    word-break: break-all;
}

.oswald {
    font-family: "Oswald", sans-serif;
}

.text-custom {
    font-size: 40px;
}

@media (min-width:280px) and (max-width:500px) {
    .text-custom {
        font-size: 22px;
    }
}
</style>