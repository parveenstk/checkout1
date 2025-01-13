const useFormStore = defineStore("Form Store", () => {
    const formData = {
        email: "",
        firstName: "",
        lastName: "",
        address: "",
        city: "",
    }

    return {
        formData
    }
})