export const useCartStore = defineStore('cart', () => {
    // Checkout Store
    const checkoutStore = useCheckoutStore();
    // formStore
    const formStore = useFormStore();

    const cartData = ref([]);
    const discountSaving = ref(0.00);
    const subTotal = ref(0.00);
    const shippingPrice = ref(0);
    const cartTotal = computed(() => subTotal.value + shippingPrice.value)


    const updateAirmotoInCart = (id: number) => {
        const selectedPack = checkoutStore.airmotoPack.filter(pack => pack.productId === id);

        cartData.value.push(selectedPack[0]);
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

    // Shipping Price
    const updateShippingPrice = () => {
        const selectedShipping = checkoutStore.allShippingMethods.filter(method => method.shipProfileId == +formStore.formData.shippingMethod)[0]
        shippingPrice.value = +selectedShipping.rules[0].shipPrice;
    }

    // add product in cart
    const addProduct = (id: number) => {
        const selectedProduct = checkoutStore.otherProducts.filter(product => product.productId === id)
        cartData.value.push(selectedProduct[0]);
    }

    const removeProduct = (id: number) => {
        cartData.value = cartData.value.filter(product => product.productId!== id)
    }

    return {
        cartData,
        updateAirmotoInCart,
        discountSaving,
        subTotal,
        shippingPrice,
        updateShippingPrice,
        cartTotal,
        addProduct,
        removeProduct
    }
})

