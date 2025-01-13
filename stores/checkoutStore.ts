import { defineStore } from "pinia";

export const useCheckoutStore = defineStore('checkout', () => {
    // cartStore
    const cartStore = useCartStore();

    const allProducts = ref<CampaignProduct[]>([]);
    const airmotoPack = ref<AirmotoPack[]>([]);
    const allShippingMethods = ref<ShippingMethods[]>([]);
    const allUsStates = ref<States[]>([]);


    // Actions
    const addAllProducts = (productList: CampaignProduct[]) => {
        allProducts.value = productList;

        productList.forEach((product, index) => {
            if (product.campaignProductId === 3859 || product.campaignProductId === 3860 || product.campaignProductId === 3861 || product.campaignProductId === 3862 || product.campaignProductId === 3863 || product.campaignProductId === 3864 || product.campaignProductId === 3865 || product.campaignProductId === 3866 || product.campaignProductId === 3867 || product.campaignProductId === 3868) {
                const obj: AirmotoPack = {
                    productId: product.campaignProductId,
                    quantity: index,
                    compareAtPrice: product.compareAtPrice,
                    price: product.price,
                    productName: product.productName,
                    rating: '',
                    adjectPrice: '',
                }
                if (product.campaignProductId === 3861) obj.rating = '⭐ Most Popular'
                if (product.campaignProductId === 3863) obj.rating = '⭐⭐ Family Deal'
                if (product.campaignProductId === 3865) obj.rating = '⭐⭐⭐ Gift Saver'
                if (product.campaignProductId === 3868) obj.rating = '⭐⭐⭐ Super Saver'

                if (product.campaignProductId === 3859) obj.adjectPrice = '$69.99/ea'
                if (product.campaignProductId === 3860) obj.adjectPrice = '$67.99/ea'
                if (product.campaignProductId === 3861) obj.adjectPrice = '$65.99/ea'
                if (product.campaignProductId === 3862) obj.adjectPrice = '$63.99/ea'
                if (product.campaignProductId === 3863) obj.adjectPrice = '$61.99/ea'
                if (product.campaignProductId === 3864) obj.adjectPrice = '$59.99/ea'
                if (product.campaignProductId === 3865) obj.adjectPrice = '$57.99/ea'
                if (product.campaignProductId === 3866) obj.adjectPrice = '$56.99/ea'
                if (product.campaignProductId === 3867) obj.adjectPrice = '$55.99/ea'
                if (product.campaignProductId === 3868) obj.adjectPrice = '$54.99/ea'

                airmotoPack.value.push(obj);
            }
        })
        cartStore.updateAirmotoInCart(3859);
    }

    // Shipping Methods
    const shippingMethods = (methodList: ShippingMethods[]) => {
        const obj = methodList.map(method => {
            return { ...method, shipName: `${method.profileName} - $${method.rules[0].shipPrice}` }
        })
        allShippingMethods.value = obj;
        // console.log("shippingMethods: " +shippingMethods);
    }


    const states = (StateList: States[]) => {
        stateList.forEach(state => {
            if (state.countryCode === 'US') {
                statesList.value.push(state);
            }
        })
        console.log("states: " + states);
    }

    return {
        allProducts,
        addAllProducts,
        airmotoPack,
        shippingMethods,
        allShippingMethods,
    }
})