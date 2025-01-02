<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{ time: number }>();

const emit = defineEmits(['timeUp']);

const formattedTime = ref(formatTime(props.time));

function formatTime(time: number) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}`;
}

watch(props, () => {
  if (props.time === 0) {
    emit('timeUp');
  }
  formattedTime.value = formatTime(props.time);
});
</script>
<template>
  <p class="text-3xl text-gray-600">{{ formattedTime }}</p>
</template>
