<template>
    <section v-if="!notFound" id="green-bottm" class="bg-[#3cb54b] py-5 px-10">
        <div class="flex justify-around text-white">
            <div id="left" class="w-1/3 flex flex-col items-center justify-center gap-5">
                <p class="text-5xl font-bold text-center">90 Day Money Back Guarantee</p>
                <p class="text-center text-xs sm:text-sm">Enjoy the convenience and peace of mind knowing you're prepared for
                anything. With more than 54,234+ reviews, Airmoto is the most trusted brand for portable tire inflators.</p>
                <p class="text-center text-xs sm:text-sm">Ships within 48 Hrs • 90 Day Money-Back • 1 Yr Warranty</p>
            </div>
            <div id="right" class="">
                    <NuxtImg src="/images/badge_guarantee_2.webp" width="273" height="225" alt="badge_guarantee_2" />
            </div>
        </div>
    </section>
    <section id="black-bottom" class="bg-black py-10">
        <div class="text-white flex flex-col gap-4 justify-center items-center">
            <NuxtImg src="/images/logo.webp" width="113" height="22" alt="footer-logo"/>
            <div class="flex gap-2 text-[#A7B4AD]">
                <a href="">Privacy </a> -
                <a href="">Terms</a> - 
                <a href="">Refunds</a> -
                <a href="">User Manual</a> -
                <a href="">Wholesale</a> -
                <a href="">Support</a>
            </div>
            <p class="text-[#A7B4AD]">© 2024 - All Rights Reserved.</p>
        </div>
    </section>
</template>
<script setup>
const props = defineProps({
    notFound: {
        type: Boolean,
        default: true
    }
})
</script>