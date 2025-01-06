<template>
  <!-- Right Part  -->
  <div class="bg-blue-200 flex justify-center items-center gap-8">
    <section class="ml-8 w-4/12">
      <!-- Discount Timer -->
      <div
        id="discount-timer"
        class="bg-[#eef3c9] flex justify-center items-center gap-2 py-2 rounded-lg"
      >
        <p class="font-semibold">{{ timer.text1 }}</p>
        <p>{{ timer.text2 }}</p>
      </div>

      <!-- Express Checkout -->
      <div
        id="Express-checkout"
        class="flex flex-col justify-center items-center mt-5 mb-5"
      >
        <p class="font-bold text-sm">{{ expressChck.text }}</p>
        <div class="mt-3">
          <PaypalLink />
        </div>
      </div>

      <!-- Choose Package Section -->
      <div class="flex justify-between items-center">
        <p class="font-semibold">{{ airmotoPackage.packageText.left }}</p>
        <p class="font-bold text-red-600">
          {{ airmotoPackage.packageText.right }}
        </p>
      </div>
      <!-- vertical line -->
      <hr class="mb-3" />
      <OfferComponent />
      <OfferComponent />
      <OfferComponent />
      <OfferComponent />
      <OfferComponent />
      <OfferComponent />
      <OfferComponent />
    </section>

    <!-- Left Part -->
    <aside>
      <section
        id="product-box"
        class="bg-zinc-200 flex flex-col justify-center items-center p-2"
      >
        <div>
          <p class="text-red-600 font-semibold">
            {{ productBoxContent.redText }}
          </p>
        </div>
        <p class="font-bold">{{ productBoxContent.ratingText }}</p>
        <img
          src="/public/images/sale_airmoto.webp"
          width="150"
          height="150"
          alt="Offer's Pic"
        />
      </section>

      <div class="w-full">
        <h1 class="font-bold">{{ productBoxContent.yCard }}</h1>
      </div>
      <div class="flex w-full gap-2 mt-2">
        <svg
          width="20"
          height="19"
          xmlns="http://www.w3.org/2000/svg"
          href=""
          srcset=""
          class="order-summary-toggle__icon"
        >
          <path
            fill="#000"
            d="M17.178 13.088H5.453c-.454 0-.91-.364-.91-.818L3.727 1.818H0V0h4.544c.455 0 .91.364.91.818l.09 1.272h13.45c.274 0 .547.09.73.364.18.182.27.454.18.727l-1.817 9.18c-.09.455-.455.728-.91.728zM6.27 11.27h10.09l1.454-7.362H5.634l.637 7.362zm.092 7.715c1.004 0 1.818-.813 1.818-1.817s-.814-1.818-1.818-1.818-1.818.814-1.818 1.818.814 1.817 1.818 1.817zm9.18 0c1.004 0 1.817-.813 1.817-1.817s-.814-1.818-1.818-1.818-1.818.814-1.818 1.818.814 1.817 1.818 1.817z"
            href=""
            srcset=""
          ></path>
        </svg>
        <h1 class="font-semibold text-sm">{{ orderHeading.text }}</h1>
      </div>
      <div id="discount-content" class="flex justify-center w-full gap-4 bg-red-200">
        <div id="discount-catogery" class="text-right text-sm">
          <p class="font-bold">Discount Savings</p>
          <p>Sub Total</p>
          <p>Shipping</p>
        </div>
        <div id="discount-amount" class="text-sm">
          <p class="font-bold  text-red-500">$0.00</p>
          <p>$0.00</p>
          <p>$0.00</p>
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup>
const timer = discountTimercontent;
const { expressChck, airmotoPackage, productBoxContent, orderHeading } =
  formContent;
</script>
