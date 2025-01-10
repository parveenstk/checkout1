export const useCartStore = defineStore('cart', () => {
    // Checkout Store
    const checkoutStore = useCheckoutStore();

    const cartData = ref({});

    const updateAirmotoInCart = (id: number) => {
        const selectedPack = checkoutStore.airmotoPack.filter(pack => pack.productId === id);
        cartData.value = selectedPack[0];
    }

    return {
        cartData,
        updateAirmotoInCart,
    }
})