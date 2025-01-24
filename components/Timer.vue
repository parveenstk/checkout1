<template>
  <div>
    <h1 v-if="timeLeft !== 0" class="font-bold text-red-500">
      {{ formattedMinutes }} {{ minuteLabel }} : {{ formattedSeconds }} {{ secondLabel }}
    </h1>
    <p class="font-bold text-red-500" v-if="timeLeft === 0">EXPIRED !</p>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, defineProps } from 'vue';

const props = defineProps({
  initialTime: {
    type: Number,
    required: true,
  },
  minuteLabel: {
    type: String,
    default: '',
  },
  secondLabel: {
    type: String,
    default: '',
  }
});

// Use the prop to initialize timeLeft
const timeLeft = ref(props.initialTime);

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
const formattedMinutes = computed(() => {
  return String(Math.floor(timeLeft.value / 60)).padStart(2, '0');
});

const formattedSeconds = computed(() => {
  return String(timeLeft.value % 60).padStart(2, '0');
});

onMounted(() => {
  startTimer();
});
</script>
