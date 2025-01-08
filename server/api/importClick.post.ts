export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const requestOption = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        }
    }
    const data = await fetch(
        "https://api.checkoutchamp.com/landers/clicks/import/?loginId=revboostapirs.creatunity&campaignId=65&pageType=checkoutPage&password=RSR6ryHh9eEeE1YjJ&requestUri=http://localhost:3001/",
        requestOption
    ).then(response => response.json());
    
    return { ...data };
})

