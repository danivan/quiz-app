<script setup lang="ts">
import { useQuizStore } from '../../store/quiz';
import FloatingCard from '../FloatingCard.vue';

const store = useQuizStore();
</script>

<template>
  <FloatingCard>
    <div
      class="flex flex-col p-4 h-full w-full rounded-xl items-center justify-center gap-4"
    >
      <h1 class="text-4xl">Result</h1>
      <p class="text-6xl text-green-600">
        Score: {{ store.score }}/{{ store.questions.length }}
      </p>
      <button
        class="border-2 hover:border-4 border-solid border-gray-500 active:bg-gray-200 text-gray-500 px-2 rounded text-xl"
        @click="store.reset"
      >
        Play Again
      </button>
    </div>
  </FloatingCard>
</template>
