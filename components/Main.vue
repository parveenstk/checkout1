<template>
  <!-- Right Part  -->
  <div class="flex justify-center gap-8">
    <section class="w-[39%]">
      <!-- Discount Timer -->
      <div id="discount-timer" class="bg-[#eef3c9] flex justify-center items-center gap-2 py-2 rounded-lg">
        <p class="font-semibold">{{ timer.text1 }}</p>
        <p>{{ timer.text2 }}</p>
        <Timer />
      </div>

      <!-- Express Checkout -->
      <div id="Express-checkout" class="flex flex-col justify-center items-center mt-5">
        <p class="font-bold text-sm">{{ expressChck.text }}</p>
        <div class="mt-3 mb-5">
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
      <hr class="mb-3 mt-1" />
      <!-- <div>{{ checkoutStore.airmotoPack }}</div> -->
      <!-- airmoto pakage product -->
      <div v-for="(airmoto, key) in checkoutStore.airmotoPack" @click="trackAirmotoPackage(airmoto.productId)">
        <OfferComponent v-if="key < 7" :key="key" :quantity="airmoto.quantity" :strokedPrice="airmoto.compareAtPrice"
          :rating="airmoto.rating" :adjectPrice="airmoto.adjectPrice"
          :checked="selectedAirmoto === airmoto.productId" />
      </div>
      <!-- Need More Button -->
      <div v-if="!needMoreStatus">
        <div id="needMore" class="flex justify-center items-center p-1">
          <button class="py-1 px-4 border border-dashed border-black text-blue-700 font-semibold rounded-md"
            @click="() => needMoreStatus = !needMoreStatus">
            Need More
          </button>
        </div>
      </div>
      <!-- Pack more than 7 -->
      <div v-if="needMoreStatus" v-for="(airmoto, key) in checkoutStore.airmotoPack"
        @click="trackAirmotoPackage(airmoto.productId)">
        <OfferComponent v-if="key >= 7" :key="key" :quantity="airmoto.quantity" :strokedPrice="airmoto.compareAtPrice"
          :rating="airmoto.rating" :adjectPrice="airmoto.adjectPrice"
          :checked="selectedAirmoto === airmoto.productId" />
      </div>

      <div class="flex justify-center items-center p-1 mb-6">
        <p>Order now...only <span class="font-bold text-red-600">58</span> left in stock</p>
      </div>
      <form @submit="(e) => handleSubmit(e)">
        <!-- Shipping Address Section -->
        <p class="font-bold text-lg ">Shipping Address</p>
        <p class="mb-2">Enter your shipping address</p>
        <input type="email" v-model="formStore.formData.email" required placeholder="Email (For Order Confirmation)"
          class="border rounded-md border-gray-300 py-[6px] px-[12px] mt-2  w-full" maxlength="30">
        <div id="firstName-lastName" class="flex gap-2 ">
          <input type="text" required placeholder="First Name" @input="validateInput('firstName', $event)"
            class="border rounded-md border-gray-300 py-[6px] px-[12px] w-1/2 mt-2" maxlength="20">
          <input type="text" required placeholder="Last Name" @input="validateInput('lastName', $event)"
            class="border rounded-md border-gray-300 py-[6px] px-[12px] w-1/2 mt-2" maxlength="20">
        </div>
        <input type="text" v-model="formStore.formData.address" required placeholder="Address 1"
          class="border rounded-md border-gray-300 py-[6px] px-[12px] mt-2  w-full" maxlength="50">
        <input type="text" placeholder="Apt., suite, etc (optional)" v-model="formStore.formData.address2"
          class="border rounded-md border-gray-300 py-[6px] px-[12px] mt-2  w-full" maxlength="50">
        <input type="text" v-model="formStore.formData.city" required placeholder="Town / City"
          class="border rounded-md border-gray-300 py-[6px] px-[12px] mt-2 mb-2 w-full" maxlength="50">

        <div class="flex gap-1.5">
          <select @change="checkoutStore.updateStates" v-model="formStore.formData.country" name="US" id="countries"
            class="p-1 border border-gray-400 rounded-md w-1/3">
            <option value="disabled" disabled>Select Country</option>
            <option :value="country.countryCode" v-for="country in checkoutStore.countryList">{{ country.countryName }}
            </option>
          </select>
          <select v-model="formStore.formData.state" name="US" id="countries"
            class="p-1.5 border border-gray-400 rounded-md w-1/3">
            <option value="" disabled>Select State</option>
            <option :value="state.stateName" v-for="state in checkoutStore.selectedStates">{{ state.stateName }}
            </option>
          </select>
          <input id="postalCode" :maxlength="9" type="text" placeholder="Postal Code"
            class="border rounded-md border-gray-300 py-[6px] px-[12px] w-1/3" maxlength="10" required
            @input="validateInput('postalCode', $event)">
        </div>

        <input id="phoneNumber" :minlength="3" type="text" placeholder="Phone ( Optional )"
          @input="validateInput('phoneNumber', $event)"
          class="border rounded-md border-gray-300 py-[6px] px-[12px] mt-2 mb-2 w-full" maxlength="15">

        <!-- Shipping Method Section-->
        <p class="text-lg font-bold mb-6 mt-4">{{ methods.heading }}</p>
        <select @change="cartStore.updateShippingPrice" v-model="formStore.formData.shippingMethod"
          name="shipping-methods" class="p-2 border border-gray-400 rounded-md w-full">
          <option value="" disabled>{{ methods.method0 }}</option>
          <option :value="method.shipProfileId" :key="method.shipProfileId"
            v-for="method in checkoutStore.allShippingMethods">{{ method.shipName }}</option>
        </select>
        <div @click="() => addShipGuard()" class="flex items-center gap-4 p-5 mb-2 cursor-pointer">
          <input :checked="isShipGuard" type="checkbox" id="checkbox" class="cursor-pointer">
          <p class="text-sm cursor-pointer">{{ methods.checkBox.text }}</p>
        </div>

        <!-- Payment Section -->
        <h2 class="text-lg font-bold">{{ payment.headingText }}</h2>
        <p class="text-sm mb-4">{{ payment.PaymentText }}</p>

        <!-- Credit Card Option -->
        <div>
          <label id="creditCard" class="flex justify-between border border-gray-300 py-3 px-2 mb-0.5 cursor-pointer"
            @click="togglePaymentMethod('creditCard')">
            <div class="flex items-center justify-between gap-3">
              <input type="radio" id="credit-card-radio" name="payment-method" class="cursor-pointer"
                :checked="selectedPaymentMethod === 'creditCard'" />
              <p id="cc" class="font-bold">Credit Card</p>
            </div>
            <img src="/public/images/cart-logo.jpg" width="160" height="28" alt="cart-logo" />
          </label>
          <div v-if="selectedPaymentMethod === 'creditCard'" class="border-2 p-4 flex flex-col gap-2 bg-blue-50 mb-0.5">
            <input id="creditCardNumber" type="tel" placeholder="Card Number"
              class="border rounded-md border-gray-300 py-[6px] px-[12px] w-full" maxlength="17" required
              @input="validateInput('cardNumber', $event)" />
            <div class="flex gap-2">
              <input id="Year-Month" type="text" placeholder="MMYY" @input="validateInput('expiry', $event)"
                class="border rounded-md border-gray-300 py-[6px] px-[12px] w-1/2" minlength="4" maxlength="4"
                required />
              <input id="CVV" type="text" placeholder="CVV Code" @input="validateInput('cvv', $event)"
                class="border rounded-md border-gray-300 py-[6px] px-[12px] w-1/2" minlength="3" maxlength="4"
                required />
            </div>
          </div>

          <!-- PayPal Option -->
          <label name="PayPal" class="flex justify-between border border-gray-300 py-3 px-2 cursor-pointer"
            @click="togglePaymentMethod('paypal')">
            <div class="flex items-center justify-between gap-3">
              <input type="radio" id="paypal-radio" name="payment-method" class="cursor-pointer"
                :checked="selectedPaymentMethod === 'paypal'" />
              <p name="paypal" class="font-bold">PayPal</p>
            </div>
          </label>
          <div v-if="selectedPaymentMethod === 'paypal'" class="border-2 p-4 flex flex-col gap-2 bg-blue-50 mt-0.5">
            <NuxtImg src="/images/paypal-checkout.png" width="300" height="100" class="w-200 mx-auto cursor-pointer" />
          </div>
        </div>

        <div @click="() => handleSameShippingAddress()" class="flex items-center gap-4 mt-6 mb-6 w-fit">
          <input :checked="sameShippingAddress" id="billSame" name="billSame" type="checkbox" class="cursor-pointer" />
          <p class="text-sm font-semibold select-none cursor-pointer">
            {{ methods.checkBox.text1 }}
          </p>
        </div>

        <!-- Billing Information -->
        <div v-if="!sameShippingAddress">
          <h1 class="font-bold text-lg">{{ bill.headingText }}</h1>
          <p>{{ bill.billingText }}</p>
          <input v-model="formStore.formData.billingAddress" type="text" placeholder="Street Address"
            class="border rounded-md border-gray-300 py-[6px] px-[12px] mt-2  w-full" maxlength="100" required>
          <input v-model="formStore.formData.billingCity" type="text" placeholder="City"
            class="border rounded-md border-gray-300 py-[6px] px-[12px] mt-2  w-full" maxlength="100" required>
          <div class="flex gap-1.5 mt-2 mb-6">
            <select @change="checkoutStore.billingUpdateStates" v-model="formStore.formData.billingCountry"
              id="countries" class="p-1 border border-gray-400 rounded-md w-1/3" required>
              <option disabled>Select Country</option>
              <option v-for="country in checkoutStore.countryList" :value="country.countryCode">{{ country.countryName
                }}
              </option>
            </select>
            <select v-model="formStore.formData.billingState" id="countries"
              class="p-1.5 border border-gray-400 rounded-md w-1/3" required>
              <option value="" disabled>Select State</option>
              <option :key="state.stateCode" :value="state.stateCode"
                v-for="state in checkoutStore.billingSelectedStates">{{ state.stateName }}</option>
            </select>
            <input @input="validateInput('zipCode', $event)" id="postalCode" type="text" placeholder="Zip"
              class="border rounded-md border-gray-300 py-[6px] px-[12px] w-1/3" :minlength="3" :maxlength="9" required>
          </div>
        </div>

        <!-- VIP Product -->
        <div class="flex flex-col justify-center items-center bg-[#FFBF00] p-2">
          <VipTimer />
          <div @click="() => addVipOptin()" class="flex items-center gap-6">
            <input :checked="vipOptin" type="checkbox" id="termsCheckbox" class="cursor-pointer">
            <div for="termsCheckbox" class="text-xs cursor-pointer font-bold text-pretty">
              {{ bill.tandcText }}
            </div>
          </div>
        </div>
        <p class="text-[13px] p-4 border-4 border-zinc-300 mb-8"><span class="font-bold">{{ bill.rMoreBold }}</span>{{
          bill.readMore }}</p>
        <button class="px-4 py-3 w-full rounded-md border-2 border-yellow-600 bg-[#FFBF00] text-xl font-bold">COMPLETE
          YOUR PURCHASE</button>
      </form>
      <div class="flex flex-col items-center mt-6 mb-6">
        <img src="/public/images/badge_secure_guarantee.webp" alt="img1" width="353" height="60">
        <img src="/public/images/badge_credit_cards.webp" alt="img2" width="364" height="40">
      </div>
    </section>


    <!-- Left Part -->
    <aside class="w-[26%]">
      <section id="product-box" class="flex flex-col justify-center items-center p-2 bg-zinc-100">
        <div>
          <p class="text-red-600 font-semibold">
            {{ productBoxContent.redText }}
          </p>
        </div>
        <p class="font-bold text-sm">{{ productBoxContent.ratingText }}</p>
        <img src="/public/images/sale_airmoto.webp" width="150" height="150" alt="Offer's Pic" />
      </section>

      <!-- Your Cart Start -->
      <div id="Your Cart" class="w-full bg-zinc-100 pb-1">
        <h1 class="font-bold ml-2">{{ productBoxContent.yCard }}</h1>
      </div>
      <div class="border border-zinc-300 bg-zinc-100">
        <div class="flex w-full gap-2 mt-2 p-3">
          <svg width="20" height="19" xmlns="http://www.w3.org/2000/svg" href="" srcset=""
            class="order-summary-toggle__icon">
            <path fill="#000"
              d="M17.178 13.088H5.453c-.454 0-.91-.364-.91-.818L3.727 1.818H0V0h4.544c.455 0 .91.364.91.818l.09 1.272h13.45c.274 0 .547.09.73.364.18.182.27.454.18.727l-1.817 9.18c-.09.455-.455.728-.91.728zM6.27 11.27h10.09l1.454-7.362H5.634l.637 7.362zm.092 7.715c1.004 0 1.818-.813 1.818-1.817s-.814-1.818-1.818-1.818-1.818.814-1.818 1.818.814 1.817 1.818 1.817zm9.18 0c1.004 0 1.817-.813 1.817-1.817s-.814-1.818-1.818-1.818-1.818.814-1.818 1.818.814 1.817 1.818 1.817z"
              href="" srcset=""></path>
          </svg>
          <h1 class="font-semibold text-sm">{{ orderHeading.text }}</h1>
        </div>
        <div id="product-details" class="flex justify-between p-2" v-for="product in cartStore.cartData">
          <p>{{ product.productName }}</p>
          <p>${{ product.price }}</p>
        </div>
        <div id="discount-content" class="flex justify-around gap-4">
          <div id="discount-catogery" class="text-right text-sm w-[70%]">
            <p class="font-bold">Discount Savings</p>
            <p>Sub Total</p>
            <p>Shipping</p>
          </div>
          <div id="discount-amount" class="text-sm text-right">
            <p class="font-bold text-red-500">${{ cartStore.discountSaving.toFixed(2) }}</p>
            <p>${{ cartStore.subTotal.toFixed(2) }}</p>
            <p>${{ cartStore.shippingPrice.toFixed(2) }}</p>
          </div>
        </div>
        <div id="Order-total" class="font-bold flex justify-between p-2">
          <h1 class="">Order Total</h1>
          <p>${{ cartStore.cartTotal.toFixed(2) }}</p>
        </div>
      </div>
      <p class="text-xs text-center p-4 bg-zinc-100">
        Sales tax will be settled upon checkout confirmation
      </p>
      <div class="flex flex-col justify-center items-center gap-3 bg-zinc-100 pb-4">
        <div class="flex justify-center gap-2">
          <input type="text" id="coupon-code" class="w-1/2 border border-black rounded-md px-[10px]"
            placeholder="Coupon Code" />
          <button class="py-1 px-4 bg-black text-white font-bold rounded-md">
            Apply
          </button>
        </div>
        <img src="/public/images/payments.webp" width="240" height="29" alt="payments-img" />
        <p class="text-xs text-center">🔒 Secure 256-bit SSL encryption</p>
      </div>
      <div class="flex justify-center items-center gap-2 mb-6 mt-4">
        <div class="w-[70%]">
          <img src="/public/images/badge_guarantee_2.webp" width="85" height="70" alt="money-back.img" />
        </div>
        <div>
          <p class="font-bold text-xs">
            90 Day Money-Back Guarantee:
            <span class="text-[10px]">Feel safe knowing you are protected with a 90 day guarantee. Simply
              send the item(s) back in the original packagingto receive a refund
              or replacement, less S&H.</span>
          </p>
        </div>
      </div>
      <div class="text-sm p-3 rounded-md border-[2.5px] mb-2 border-zinc-300">
        <p class="font-bold mb-2">{{ reviews.heading0 }}</p>
        <p class="text-pretty mb-6">{{ reviews.text0 }}</p>
        <p class="text-pretty">
          <span class="font-bold">{{ reviews.name0 }}</span>
          {{ reviews.purchaser }}
        </p>
      </div>
      <div class="text-sm p-3 rounded-md border-[2.5px] border-zinc-300">
        <p class="font-bold mb-2">{{ reviews.heading1 }}</p>
        <p class="text-pretty mb-6">{{ reviews.text1 }}</p>
        <p class="text-pretty">
          <span class="font-bold">{{ reviews.name1 }}</span>
          {{ reviews.purchaser }}
        </p>
      </div>
    </aside>
  </div>
</template>

<script setup>

const timer = discountTimercontent;
const { expressChck, airmotoPackage, productBoxContent, orderHeading, shippingMethods, payment, reviews } =
  formContent;

// checkoutStore
const checkoutStore = useCheckoutStore();

// Cart Store
const cartStore = useCartStore();

// form store
const formStore = useFormStore();

// Shipping Method Section
const methods = shippingMethods;

// Biiling information Content
const bill = payment.billingInformation

// needMore
const needMoreStatus = ref(false);

// shipGuard
const isShipGuard = ref(true);
const addShipGuard = () => {
  isShipGuard.value = !isShipGuard.value;
  if (isShipGuard.value) {
    cartStore.addProduct(3817);
  } else {
    cartStore.removeProduct(3817);
  }
}

// VIP Optin
const vipOptin = ref(false);
const addVipOptin = () => {
  vipOptin.value = !vipOptin.value;
  if (vipOptin.value) {
    cartStore.addProduct(3880);
  } else {
    cartStore.removeProduct(3880);
  }
}

// track airmoto package
const selectedAirmoto = ref(3859);
const trackAirmotoPackage = (id) => {
  selectedAirmoto.value = id;
  cartStore.updateAirmotoInCart(id);

  // update shipping option
  const selectedShippingOption = ref(153)
  if (id === 3859) formStore.formData.shippingMethod = "153";
  else formStore.formData.shippingMethod = "154";
  cartStore.updateShippingPrice();
}

// handle submit
const handleSubmit = (e) => {
  e.preventDefault();
  importLead();
  console.log("formStore.formData", formStore.formData);
}

// Define regex patterns for different fields
const patterns = {
  firstName: /^[A-Za-z]+$/,
  lastName: /^[A-Za-z]+$/,
  cardNumber: /^\d*$/,
  cvv: /^\d*$/,
  expiry: /^\d*$/,
  phoneNumber: /^[0-9-+]*$/,  // Digits, dashes, and plus signs (for phone numbers)
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,  // Basic email regex
  zipCode: /^\d*$/,  // US ZIP code (optional 4-digit extension)
  postalCode: /^\d*$/,
};

// Validation function for different fields
function validateInput(fieldName, event) {
  const value = event.target.value;
  const regex = patterns[fieldName];

  // Validate the value against the regex pattern
  if (value === "" || regex && regex.test(value)) {
    formStore.formData[fieldName] = value; // Update if valid
    // console.log(fieldName, formStore.formData[fieldName])
  } else {
    event.target.value = formStore.formData[fieldName]; // Revert to last valid value
  }
}

// Function to toggle payment Options
const selectedPaymentMethod = ref("creditCard");
const togglePaymentMethod = (method) => {
  selectedPaymentMethod.value = method;
};

// Billing information 
const sameShippingAddress = ref(true);

const handleSameShippingAddress = () => {
  sameShippingAddress.value = !sameShippingAddress.value;
}


// Import Lead API Handler

const importLead = async () => {
  const sessionId = sessionStorage.getItem("sessionId");
  const apiUrl = "/api/importLead";
  const data = {
    // shipping detials
    shipFirstName: formValues.firstName,
    shipLastName: formValues.lastName,
    emailAddress: formValues.email,
    shipAddress1: formValues.address,
    shipAddress2: formValues.address2,
    shipCity: formValues.city,
    shipCountry: formValues.country,
    shipState: formValues.shipState,
    shipPostalCode: formValues.postalCode,
    phoneNumber: formValues.phoneNumber,
    // billing details
    billingFirstName: formValues.firstName,
    billingLastName: formValues.lastName,
    billingEmail: formValues.email,
    billingAddress1: formValues.address,
    billingAddress2: formValues.address2,
    billingCity: formValues.billingCity,
    billingCountry: formValues.billingCountry,
    billingState: formValues.billingState,
    billingPostalCode: formValues.billingPostalCode,
    billingPhoneNumber: formValues.phoneNumber,
    campaignId: "65",
    billShipSame: "",
    ipAddress: "",
    sessionId: sessionId,
    couponCode: "",
    affId: "",
    orderId: "",
    pageType: "checkout",
    requestUri: "http://localhost:3001/",
    salesUrl: "http://localhost:3001/",
    shipProfileId: formValues.shippingMethod,
    redirectsTo: "http://localhost:3001/",
    errorRedirectsTo: "http://localhost:3001/",
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
    console.log("importLead Data :", data);
  } catch (error) {
    console.error("Error:", error);
  }
};

// form data values
const formValues = formStore.formData

</script>