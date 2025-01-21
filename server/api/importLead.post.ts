export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const param = new URLSearchParams(body).toString();
    const requestOption = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        }
    }
    const data = await fetch(
        "https://api.konnektive.com/leads/import/?loginId=revboostapirs.creatunity&password=RSR6ryHh9eEeE1YjJ&" + param,
        requestOption
    ).then(response => response.json());

    return { ...data };
})