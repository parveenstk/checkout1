<template>
    <div class="w-1/3 ml-6 p-2 bg-zinc-100  rounded-md text-sm shadow-2xl">
        <div class="b-shadow">
            <p class="text-lg font-poppins text-center">Customer Information</p>
            <div class="bg-white rounded-lg">
                <table class="table-auto w-full">
                    <thead>
                        <tr class="">
                            <td class="border-b border-gray-300 px-2 py-2 text-left">Contact Information</td>
                            <!-- <td class="border-b border-gray-300 px-2 py-2 text-left w-b">{{ emailAddress }}</td> -->
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border-b border-gray-300 px-2 py-2 text-left w-b">Payment Method</td>
                            <!-- <td class="border-b border-gray-300 px-2 py-2 text-left w-b">{{ paySource }}</td> -->
                        </tr>
                        <tr class="">
                            <td class="border-b border-gray-300 px-2 py-2 text-left w-b">Shipping Address</td>
                            <!-- <td class="border-b border-gray-300 px-2 py-2 text-left w-b">{{ shippingAddress }}</td> -->
                        </tr>
                        <tr class="">
                            <td class="border-b border-gray-300 px-2 py-2 text-left w-b">Billing Address</td>
                            <!-- <td class="border-b border-gray-300 px-2 py-2 text-left w-b">{{ billingAddress }}</td> -->
                        </tr>
                        <tr class="">
                            <td class="border-gray-300 px-2 py-2 text-left w-b">Shipping Method</td>
                            <!-- <td class="border-gray-300 px-2 py-2 text-left w-b">{{ shippingMethod }}</td> -->
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>