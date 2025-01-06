<template>
  <div class="bg-[#000000] flex justify-around items-center py-1">
    <NuxtImg
      :src="data.headerLogo" width="140" height="27" class="w-[120px] sm:w-[140px] h-[23px] sm:h-[27px]"
      alt="Logo"
    />

    <div class="flex justify-center items-center text-white font-semibold gap-3">
      <NuxtImg
        :src="data.guaranteeBadge" width="60" height="60" class="w-[42px] sm:w-[60px] h-[42px] sm:h-[60px]"
        alt="badge_guarantee"
      />

      <div class="text-white font-semibold">
        <p>{{data.guaranteeText0}}</p>
        <p>{{data.guaranteeText1}}</p>
      </div>
      
      <!-- Vertical line -->
      <div class="border-l-[1px] border-white h-[35px] sm:h-[50px]"></div>
      <div>
        <p>{{data.enquiryText0}}</p>
        <p>{{data.enquiryText1}}</p>
      </div>
    </div>
  </div>
  <div class="bg-[#e5e7eb] flex justify-center items-center font-semibold gap-3">
    <p>{{data.title}}</p>
  </div>
</template>
<script setup >
const data = checkoutHeaderContent;
</script>