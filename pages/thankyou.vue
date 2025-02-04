<template>
    <section class="w-full">
        <div>
            <p class="bg-red-600 flex justify-center p-2 text-white font-semibold">Thank you for ordering!</p>
        </div>
        <div class="flex justify-around py-6">
            <div class="p-1">
                <NuxtImg src="/images/offers/logo.png" width="160px" height="auto" />
            </div>
            <div class="flex items-center gap-1">
                <NuxtImg src="/images/offers/call.png" width="60px" class="p-2 cursor-pointer" />
                <div>
                    <p>Order Now</p>
                    <p class="font-bold">888-855-6433</p>
                </div>
            </div>
        </div>
        <div class="container lg:w-2/3 sm:w-full mx-auto p-2 mt-8">
            <h1 class="text-center font-bold text-4xl uppercase"><span class="text-red-600">CONGRATS</span> -
                Order Complete!</h1>
            <p class="text-lg font-semibold text-center mt-6">Within a few minutes you will receive an order
                confirmation email with your order ID.<br>
                Below you can find all the products you purchased...</p>
        </div>

        <div class="flex justify-center gap-8 py-8">
            <CustomerInfo />
            <ProductReciept />
        </div>
        <CheckResources />

        <div>
            <NuxtImg src="/images/offers/logo.png" />
        </div>

    </section>
</template>