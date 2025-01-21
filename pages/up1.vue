<template>
    <!-- Heading & Timer -->
    <div class="bg-red-600 text-white font-semibold flex justify-center py-2">
        <p>WAIT! Don't Miss This Exclusive One-Time Deal</p>
    </div>
    <section>
        <div class="flex flex-col justify-center items-center">
            <h1 class="text-red-600 font-bold text-2xl p-2">Keep Your Airmoto Organized and Protected</h1>
            <div class="bg-[#F2FFD6] border-[#C5D89C] border-2 border-dashed px-36 py-2 rounded-md">
                <p class="text-lg font-bold">Ending Soon :</p>
            </div>
            <h2 class="font-bold text-3xl m-5"> Power Kit and 2-YR Warranty</h2>
        </div>
    </section>
    <!-- Product & Details -->
    <section class="flex justify-center gap-20 m-4">
        <div class="w-80 h-80">
            <NuxtImg src="/images/offers/up1.jpg" class="w-screen border-gray-300 border-2 rounded-lg" />
        </div>
        <div class="w-[30%] flex flex-col gap-2 font-semibold">
            <div>
                <p class="text-red-600 font-semibold text-sm"><span class="text-yellow-400 text-xl">★★★★★</span> Best
                    Value
                    Deal</p>
                <h1 class="font-bold text-lg">Charge Your Airmoto Anywhere PLUS... 2 Year Total Protection!</h1>
                <p class="text-red-600 font-bold mt-4">Only $37/ea <span class="text-slate-400 line-through">Only
                        $59/ea</span></p>
            </div>

            <div class="flex gap-2 items-center ">
                <div class="bg-green-500 text-white rounded-full w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <p>(1) Extended 3ft. Cable</p>
            </div>
            <div class="flex gap-2 items-center ">
                <div class="bg-green-500 text-white rounded-full w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <p>(1) Home Adapter</p>
            </div>
            <div class="flex gap-2 items-center ">
                <div class="bg-green-500 text-white rounded-full w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <p>(1) Car Charger</p>
            </div>
            <div class="flex gap-2 items-center">
                <div class="bg-green-500 text-white rounded-full w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <p>(1) 2-Year Warranty</p>
            </div>
            <div class="flex flex-col items-center gap-3 mt-10 ">
                <button class="animate-wiggle font-bold py-4 bg-[#FFBF00] w-full rounded-md border-yellow-700 border-2 ">Yes, Add to
                    My Order!</button>
                <button class="font-bold text-zinc-500 text-xl mb-10">No thanks, maybe later</button>
            </div>
        </div>
    </section>

</template>