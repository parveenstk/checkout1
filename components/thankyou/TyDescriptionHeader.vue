<template>
    <section>
        <section id="main">
            <div class="container lg:w-2/3 sm:w-full mx-auto p-2">
                <div class="flex flex-wrap">
                    <div class="w-1/2 lg:pt-4">
                        <NuxtImg src="/images/offers/logo.png" class="w-custom" />
                    </div>
                    <div class="w-1/2 lg:p-4 ">
                        <div class="flex justify-end">
                            <div class=""><a :href="'tel:' + phone">
                                    <NuxtImg src="/images/offers/call.png" class="w-10" />
                                </a>
                            </div>
                            <div class="">
                                <p class="mb-0 mx-2">Order Now</p>
                                <a :href="'tel:' + phone" class="m-0 mx-2 font-bold">{{ phone }}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>
<script setup>
const props = defineProps({
    phone: String,
})
const { phone } = (props);

</script>

<style>
.w-custom {
    width: 160px;
}

@media (min-width:280px) and (max-width:500px) {
    .w-custom {
        width: 120px;
        margin-top: 7px;
    }
}
</style>