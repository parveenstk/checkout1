import { defineStore } from "pinia";

export const useCheckoutStore = defineStore('checkout', () => {
    // cartStore
    const cartStore = useCartStore();

    const allProducts = ref<CampaignProduct[]>([]);
    const airmotoPack = ref<AirmotoPack[]>([]);


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
                }
                if (product.campaignProductId === 3861) obj.rating = '⭐ Most Popular'
                if (product.campaignProductId === 3863) obj.rating = '⭐⭐ Family Deal'
                if (product.campaignProductId === 3865) obj.rating = '⭐⭐⭐ Gift Saver'
                if (product.campaignProductId === 3868) obj.rating = '⭐⭐⭐ Super Saver'
                airmotoPack.value.push(obj);
            }
        })
        cartStore.updateAirmotoInCart(3859);
    }

    return {
        allProducts,
        addAllProducts,
        airmotoPack
    }
})