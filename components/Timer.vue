<template>
    <div>
      <h1 class="font-bold">{{ formattedTime }}</h1>
      <p v-if="timeLeft === 0">EXPIRED !</p>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  
  // Set the initial time to 10 minutes (600 seconds)
  const initialTime = 10 * 60;
  const timeLeft = ref(initialTime);
  
  // Function to start the countdown timer
  const startTimer = () => {
    const interval = setInterval(() => {
      if (timeLeft.value > 0) {
        timeLeft.value -= 1;
      } else {
        clearInterval(interval);
      }
    }, 1000);
  };
  
  // Format the time as MM:SS with leading zeros
  const formattedTime = computed(() => {
    const minutes = String(Math.floor(timeLeft.value / 60)).padStart(2, '0');
    const seconds = String(timeLeft.value % 60).padStart(2, '0');
    return `${minutes} : ${seconds}`;
  });
  
  onMounted(() => {
    // Start the timer as soon as the component is mounted
    startTimer();
  });
  </script>