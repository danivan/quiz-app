<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  item: string;
}>();
</script>
<template>
  <div class="h-screen flex items-center justify-center">
    <div
      class="flex flex-col rounded-xl bg-white p-4 shadow-xl w-1/3 h-1/2 self-center items-center justify-center"
    >
      <p class="text-2xl">{{ item.question }}</p>
      <div>{{ item.choices }}</div>
    </div>
  </div>
</template>
