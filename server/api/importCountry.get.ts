export default defineEventHandler(async (event) => {
    const requestOption = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    }

    const data = await fetch(
        "https://assets.checkoutchamp.com/countries.json",
        requestOption
    ).then(response => response.json());

    return { ...data };
})