<template>
  <div
    class="border-zinc-950 border-2 rounded-md font-semibold gap-2 flex justify-between items-center mb-2 cursor-pointer"
  >
    <div>
      <input type="radio" class="ml-2 cursor-pointer" />
      <span class="ml-2 font-bold">Buy {{quantity}} - Airmoto </span>
    </div>
    <div id="part-2" class="flex flex-col justify-end mr-2 mt-2 mb-2 text-right">
      <span class="text-xs line-through">$139.95</span>
      <span>$69.99/ea</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  quantity: Number,
})
</script>
