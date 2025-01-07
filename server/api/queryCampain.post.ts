export default defineEventHandler((event) => {
    const requestOption = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        }
    }

    const data = fetch(
        "https://api.checkoutchamp.com/campaign/query/?loginId=revboostapirs.creatunity&password=RSR6ryHh9eEeE1YjJ&campaignId=65&campaignProductId=3859,3860,3861,3862,3863,3864,3865,3866,3867,3868,3880,3817",
        requestOption
    ).then(response => response.json());

    return { ...data };
})