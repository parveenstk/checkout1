export const getRequestUri = async () => {
    const route = useRoute();
    const fullPath = `${window.location.origin}${route.fullPath}`;
    return fullPath;
};

export const billSame = async (status: any) => {
    const formStore = useFormStore();
    if(status){
        formStore.formData.billingAddress = formStore.formData.address;
        formStore.formData.billingCity = formStore.formData.city;
        formStore.formData.billingCountry = formStore.formData.country;
        formStore.formData.billingState = formStore.formData.state;
        formStore.formData.billingPostalCode = formStore.formData.postalCode;
    } else return false;
}