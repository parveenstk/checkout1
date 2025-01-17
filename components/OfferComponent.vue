<template>
  <div
    class="border-zinc-400 border rounded-md font-semibold gap-2 flex justify-between items-center mb-2 cursor-pointer">
    <div>
      <input type="radio" class="ml-2 cursor-pointer" :checked="checked" />
      <span class="ml-2 font-bold">Buy {{ quantity }} - Airmoto </span>
    </div>
    <div id="part-2" class="flex flex-col justify-end mr-2 mt-2 mb-2 text-right">
      <span v-if="rating" class="text-[12px] font-medium">{{ rating }}</span>
      <span class="text-xs line-through text-slate-500">${{ strokedPrice }}</span>
      <span>{{ adjectPrice }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  quantity: Number,
  strokedPrice: String,
  rating: String,
  checked: Boolean,
  adjectPrice: String,
})
</script>
