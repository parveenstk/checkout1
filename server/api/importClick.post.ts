export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const param = new URLSearchParams({
        loginId: "revboostapirs.creatunity",
        password: "RSR6ryHh9eEeE1YjJ",
        ...JSON.parse(body)
    });
    console.log(param)
    const requestOption = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        }
    }
    const data = await fetch(
        "https://api.checkoutchamp.com/landers/clicks/import/?" + param.toString(),
        requestOption
    ).then(response => response.json());
    return { ...data };
})

