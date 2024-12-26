<script setup lang="ts">
defineProps<{
  choice: string;
}>();
</script>

<template>
  <button
    class="border-2 border-solid border-blue-500 hover:bg-blue-200 text-blue-500 font-bold py-2 px-4 rounded"
    @click="$emit('answerSelected', choice)"
  >
    <slot></slot>
  </button>
</template>
