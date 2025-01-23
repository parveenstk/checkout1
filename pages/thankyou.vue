<template>
    <div class="bg-red-500 flex justify-center">
        <p class="text-white p-1 font-semibold text-lg ">Thank you for Ordering!</p>
    </div>
    <div class="flex justify-around mt-6">
        <NuxtImg src="/images/offers/logo.png" class="w-40 h-8" />
        <div class="flex items-center gap-2">
            <NuxtImg src="/images/offers/call.png" class="w-10" />
            <div>
                <p>Order Now</p>
                <p class="font-bold">888-855-6433</p>
            </div>
        </div>
    </div>
    <section>
        <div class="container lg:w-2/3 sm:w-full mx-auto p-2 flex flex-col gap-6 mt-6">
            <h1 class="text-center font-bold uppercase text-5xl"><span class="text-red-600">CONGRATS</span> -
                Order Complete!</h1>
            <p class="text-lg font-regular text-center mt-3 font-poppins">Within a few minutes you will receive an order
                confirmation email with your order ID.<br>
                Below you can find all the products you purchased...</p>
        </div>
    </section>
</template>