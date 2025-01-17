// export interface RequestOptions {
//     method: "GET" | "POST" | "PUT" | "DELETE" | "post"; // Specify allowed HTTP methods
//     redirect: "follow" | "error" | "manual"; // Specify allowed redirect options
// }

export interface AirmotoPack {
    productId: number;
    quantity: number;
    compareAtPrice: string;
    price: string;
    productName: string;
    rating: string;
    adjectPrice: string;
}

export interface CampaignProduct {
    campaignProductId: number;
    compareAtPrice: string;
    price: string;
    productName: string;
    rating: string;
}

export interface ShippingMethods {
    profileName: string;
    shipProfileId: number;
    rules: [{ shipPrice: string }];
}

export interface States {
    countryCode: string;
    countryName: string;
    stateName: string;
}

export interface ProductAdded {
    productName: string;
    price: string;
}