<template>
    <!-- Heading & Timer -->
    <div v-if="currentPage === 'up1' || currentPage === 'up2' || currentPage === 'up3'"
        class="bg-red-600 text-lg text-white font-semibold flex justify-center py-2">
        <p>{{ pageData.headingText }}</p>
    </div>
    <div>
        <p v-if="currentPage === 'down1' || currentPage === 'down2' || currentPage === 'down3'"
            class="bg-blue-600 text-lg text-white font-semibold flex justify-center py-2">
            {{ pageData.headingText }}</p>
    </div>
    <section>
        <div class="flex flex-col justify-center items-center">
            <h1 v-if="currentPage === 'up1' || currentPage === 'up2' || currentPage === 'up3'"
                class="text-red-600 font-bold text-2xl p-2">{{ pageData.mainHeading }}</h1>
            <h1 v-if="currentPage === 'down1' || currentPage === 'down2' || currentPage === 'down3'"
                class="text-blue-600 font-bold text-2xl p-2 text-decoration underline">{{
                    pageData.mainHeading }}</h1>
            <div
                class="bg-[#F2FFD6] border-[#C5D89C] border-2 border-dashed py-1 px-36 rounded-md mt-3 flex gap-2 items-center">
                <p class="text-lg font-bold">{{ pageData.timerText }}</p>
                <Timer class="text-lg font-bold" :initialTime="5 * 60" minuteLabel="Minutes" secondLabel="Seconds" />
            </div>
            <div class="font-bold text-3xl m-5 flex gap-2">
                <h2 v-if="currentPage !== 'up3' && currentPage !== 'down3'">{{ selectedPack }}</h2>
                <h2>{{ pageData.offerTitle }}</h2>
            </div>
        </div>
    </section>
    <!-- Product & Details -->
    <section class="flex justify-center gap-20 m-4">
        <div class="w-80 h-80">
            <NuxtImg :src="pageData.imageSrc" class="w-screen border-gray-300 border-2 rounded-lg"
                alt="Product-Image" />
        </div>
        <div class="w-[30%] flex flex-col gap-2 font-semibold">
            <div>
                <p v-if="currentPage === 'up1' || currentPage === 'up2'" class="text-red-600 font-semibold text-sm">
                    <span class="text-yellow-400 text-xl">{{ pageData.rating
                        }}</span>{{ pageData.ratingText }}
                </p>
                <p v-if="currentPage === 'down1' || currentPage === 'down2' || currentPage === 'down3'"
                    class="text-blue-600 font-semibold text-sm"><span class="text-yellow-400 text-xl">{{ pageData.rating
                        }}</span>{{ pageData.ratingText }} </p>
                <h1 v-if="currentPage === 'up1' || currentPage === 'up2' || currentPage === 'up3' || currentPage === 'down1' || currentPage === 'down2'"
                    class="font-bold text-lg">{{ pageData.productDescription }}</h1>
                <h1 v-if="currentPage === 'down3'" class="font-bold text-lg uppercase">{{ pageData.productDescription }}
                </h1>
                <p class="text-red-600 font-bold mt-4">{{ pageData.price }} <span class="text-slate-400 line-through">
                        {{ pageData.oldPrice }}</span></p>
            </div>

            <section id="productPoints" v-if="currentPage === 'up1' || currentPage === 'down1'">
                <div class="flex gap-2 items-center ">
                    <div class="bg-green-500 text-white rounded-full w-5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <p>{{ pageData.productDetails[0] }}</p>
                </div>
                <div class="flex gap-2 items-center ">
                    <div class="bg-green-500 text-white rounded-full w-5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <p>{{ pageData.productDetails[1] }}</p>
                </div>
                <div class="flex gap-2 items-center ">
                    <div class="bg-green-500 text-white rounded-full w-5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <p>{{ pageData.productDetails[2] }}</p>
                </div>
                <div class="flex gap-2 items-center">
                    <div class="bg-green-500 text-white rounded-full w-5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <p>{{ pageData.productDetails[3] }}</p>
                </div>
            </section>
            <section id="productDetails" v-if="currentPage === 'up2' || currentPage === 'down2'">{{
                pageData.productDetails }}</section>
            <section id="productDetails" v-if="currentPage === 'up3' || currentPage === 'down3'">{{
                pageData.productDetails }}</section>

            <div v-if="currentPage === 'up3' || currentPage === 'down3'" class="flex flex-col gap-6 mt-6">
                <p class="bg-zinc-300 font-bold rounded-md pl-3 py-1">{{ pageData.selectyQtyText }}</p>
                <div v-if="currentPage === 'down3'" class="flex gap-2">
                    <button v-for="qty in pageData.selectQty" :key="qty"
                        class="px-7 py-3 bg-[#FFD431] font-bold border-yellow-600 rounded-md border-2 w-fit">{{ qty
                        }}</button>
                </div>

                <div v-if="currentPage === 'up3'" class="flex gap-2">
                    <button @click="handleQtyPurchase(qty)" v-for="qty in pageData.selectQty" :key="qty"
                        class="px-7 py-3 bg-[#FFD431] font-bold border-yellow-600 rounded-md border-2 w-fit">{{ qty
                        }}</button>
                </div>
            </div>

            <div class="flex flex-col items-center gap-3 mt-4 ">
                <button @click="() => importUpsale()" v-if="currentPage === 'up1' || currentPage === 'up2'"
                    class="animate-wiggle font-bold py-4 bg-[#FFBF00] hover:bg-yellow-500 w-full rounded-md border-yellow-700 border-2 ">{{
                        pageData.addToOrderText }}</button>

                <button @click="() => importUpsale()" v-if="currentPage === 'down1' || currentPage === 'down2'"
                    class="animate-wiggle font-bold py-4 bg-[#FF0000] text-white hover:bg-yellow-500 w-full rounded-md border-red-500 border-2 ">{{
                        pageData.addToOrderText }}</button>
                <button @click="noThanks()" class="font-bold text-zinc-500 text-xl mb-6">{{ pageData.noThanksText
                    }}</button>
            </div>
        </div>
    </section>
</template>

<script setup>

const route = useRoute();
const router = useRouter();
const pageId = route.params.id; // Access the dynamic ID
const currentPage = pageId;
const pageData = upsellContent[currentPage]

// selected pack from sesion
const selectedPack = ref("");
onMounted(() => {
    if (sessionStorage) {
        selectedPack.value = `(${sessionStorage.getItem('selectedPack')})`;
        productDetails.value.qty = sessionStorage.getItem('selectedPack');
    };
})
// productDetails
const productDetails = ref({
    id: pageData.id,
    qty: '',
    nextStep: pageData.nextStep
})

// import Upsale API Handler
const importUpsale = async () => {
    const orderId = sessionStorage.getItem("orderId");
    const sessionId = sessionStorage.getItem("sessionId");
    const apiUrl = "/api/importUpsale";
    const data = {
        orderId: orderId,
        sessionId: sessionId,
        productId: productDetails.value.id,
        productQty: productDetails.value.qty,
    }
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    };

    try {
        const response = await fetch(apiUrl, requestOptions);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();

        if (data.result === "SUCCESS") {
            router.push(productDetails.value.nextStep.accept);
        } if (data.result === "ERROR") {
            if (data.message === "This upsale was already taken.") router.push(productDetails.value.nextStep.accept);
            else router.push(productDetails.value.nextStep.decline)
        }
    } catch (error) {
        router.push(productDetails.value.nextStep.decline)
        console.error("Error:", error);
    }
};

const noThanks = () => {
    router.push(productDetails.value.nextStep.decline)
}

const handleQtyPurchase = (qty) => {
    productDetails.value.qty = qty
    importUpsale();
} 
</script>