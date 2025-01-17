export const useFormStore = defineStore("Form Store", () => {

    const formData = {
        email: "",
        firstName: "",
        lastName: "",
        address: "",
        address2: "",
        city: "",
        country: "US",
        state: "",
        postalCode: "",
        phoneNumber: "",

        // Billing Details
        billingAddress: "",
        billingCity: "",
        billingCountry: "US",
        billingState: "",

        // Card Details
        cardNumber: "",
        cvv: "",
        expiry: "",
        expiryMonth: "",
        expiryYear: "",

        shippingMethod: "",
        discountCode: "",
        paymentMethod: "CREDITCARD",
    }

    return {
        formData
    }
})