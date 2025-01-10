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
}

export interface CampaignProduct {
    campaignProductId: number;
    compareAtPrice: string;
    price: string;
    productName: string;
    rating: string;
}