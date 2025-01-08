import { defineStore } from "pinia";

export const useCheckoutStore = defineStore('checkout', () => {
    const allProducts = ref([]);
    const airmotoPack = ref([]);


    // Actions
    const addAllProducts = (productList: []) => {
        allProducts.value = productList;
        productList.forEach((product, index) => {
            if (product.campaignProductId === 3859 || product.campaignProductId === 3860 || product.campaignProductId === 3861 || product.campaignProductId === 3862 || product.campaignProductId === 3863) {
                airmotoPack.value.push({
                    productId: product.campaignProductId,
                    quantity: index,
                    compareAtPrice: product.compareAtPrice,
                    price: product.price,
                    productName: product.productName
                });
            }
        })
        console.log(airmotoPack.value);
    }

    return {
        allProducts,
        addAllProducts,
        airmotoPack
    }
})