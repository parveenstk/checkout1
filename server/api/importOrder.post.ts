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
        "https://api.checkoutchamp.com/order/import/?address1=D-4&cardNumber=0000000000000000&city=delhi&country=india&emailAddress=test@gmail.com&firstName=Parveen&ipAddress&lastName=Kumar&loginId=revboostapirs.creatunity&password=RSR6ryHh9eEeE1YjJ&paySource=CREDITCARD&phoneNumber=9999999999&shipAddress1=wz-453&shipCity=New Delhi&shipCountry=India&shipFirstName=Prakash&shipPostalCode=110098&shipState=Delhi&state=New Delhi&campaignId=65&errorRedirectsTo=http://localhost:3001/&product_id=3859&redirectsTo=http://localhost:3001/&shipLastName=Kumar&product_qty=2&product_price=199.99",
        requestOption
    ).then(response => response.json());

    return { ...data };
})