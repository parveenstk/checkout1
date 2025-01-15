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
        
        // Card Details
        cardNumber: "",
        cvv: "",
        expiry: "",

        // Billing Details
        billingAddress: "",
        billingCity: "",
        billingCountry: "US",
        billingState: "",

        // shipphin mehtod
        shippingMethod: "",
    }

    return {
        formData
    }
})