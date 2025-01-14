export const useFormStore = defineStore("Form Store", () => {

    const formData = {
        email: "",
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        country: "US",
        state: "",
        postalCode: "",
        
        // Card Details
        cardNumber: "",
        cvv: "",
        expiry: "",

        // Billing Details
        billingAddress: "",
        billingCity: "",
        billingCountry: "US",
        billingState: "",
        billingPostalCode: "",

    }

    return {
        formData
    }
})