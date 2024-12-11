<script setup lang="ts">
import ChoiceButton from './ChoiceButton.vue';

defineProps<{
  item: {
    question: string;
    choices: string[];
    answer: string;
  };
}>();
</script>
<template>
  <div class="h-screen flex items-center justify-center">
    <div
      class="grid grid-cols-4 gap-4 rounded-xl bg-white p-4 shadow-xl w-1/3 h-1/2 self-center items-center justify-center"
    >
      <p class="text-2xl col-span-4 text-center">{{ item.question }}</p>
      <ChoiceButton v-for="choice in item.choices">{{ choice }}</ChoiceButton>
    </div>
  </div>
</template>
