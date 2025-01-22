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
        billingPostalCode: "",

        // Card Details
        cardNumber: "",
        cvv: "",
        expiryMonth: "",
        expiryYear: "",
        shippingMethod: "",
        discountCode: "",
        paymentMethod: "CREDITCARD",
        ip: "",
        salesUrl: "",
    };

    // getRequestUri();
    return {
        formData
    }
})