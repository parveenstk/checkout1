<template>
    <div class="border-dashed border-red-500 border-2 py-2 px-40 mb-6">
      <div>
        <table class="w-full">
          <tbody class="w-full">
            <tr class="flex items-start justify-center gap-3 font-semibold">
              <td>
                <p class="text-right text-[#ff0000]">{{ minutes }}</p>
                <p>Minutes</p>
              </td>
              <td>
                <p>:</p>
              </td>
              <td>
                <p class="text-left text-[#ff0000]">{{ seconds }}</p>
                <p>Seconds</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from "vue";
  
  const totalSeconds = 600; // 10 minutes
  const remainingSeconds = ref(totalSeconds);
  
  const updateTimer = () => {
    if (remainingSeconds.value > 0) {
      remainingSeconds.value--;
    }
  };
  
  const minutes = computed(() =>
    String(Math.floor(remainingSeconds.value / 60)).padStart(2, "0")
  );
  const seconds = computed(() =>
    String(remainingSeconds.value % 60).padStart(2, "0")
  );
  
  let timerInterval;
  
  onMounted(() => {
    timerInterval = setInterval(updateTimer, 1000);
  });
  
  onBeforeUnmount(() => {
    clearInterval(timerInterval);
  });
  </script>
  
  <style scoped>
  /* You can add custom styles here if needed */
  </style>
  