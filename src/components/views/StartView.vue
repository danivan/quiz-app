<script setup lang="ts">
import { useRouter } from 'vue-router';
import FloatingCard from '../FloatingCard.vue';

const router = useRouter();

function onStart() {
  router.push('/question');
}
</script>
<template>
  <FloatingCard>
    <div class="flex h-full w-full items-center justify-center">
      <button
        class="border-2 hover:border-4 border-solid border-blue-500 active:bg-blue-200 text-blue-500 font-bold py-2 px-4 rounded text-5xl"
        @click="onStart"
      >
        Start
      </button>
    </div>
  </FloatingCard>
</template>
