export const useFormStore = defineStore("Form Store", () => {
    const formData = {
        email: "",
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
        state: "",
        
        // Card Details
        cardNumber: "",
        cvv: "",
        expiry: "",
    }

    return {
        formData
    }
})