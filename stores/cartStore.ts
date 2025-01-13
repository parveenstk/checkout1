export const useCartStore = defineStore('cart', () => {
    // Checkout Store
    const checkoutStore = useCheckoutStore();

    const cartData = ref({});
    const discountSaving = ref(0.00);
    const subTotal = ref(0.00);
    

    const updateAirmotoInCart = (id: number) => {
        const selectedPack = checkoutStore.airmotoPack.filter(pack => pack.productId === id);

        cartData.value = selectedPack[0];
        discoutOffer();
        sTotal();

    }

    // discount savings amount
    const discoutOffer = () => {
        discountSaving.value = +(cartData.value.compareAtPrice - cartData.value.price).toFixed(2);
    }

    // sub-total amount
    const sTotal = () => {
        subTotal.value = +cartData.value.price;
    }

    return {
        cartData,
        updateAirmotoInCart,
        discountSaving,
        subTotal
    }
})

