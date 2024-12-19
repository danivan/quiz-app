<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function onStart() {
  router.push('/question');
}
</script>
<template>
  <div class="h-screen flex items-center justify-center">
    <div
      class="flex rounded-xl bg-white p-4 shadow-xl w-1/3 h-1/2 self-center items-center justify-center"
    >
      <button
        class="border-2 hover:border-4 border-solid border-blue-500 active:bg-blue-200 text-blue-500 font-bold py-2 px-4 rounded text-5xl"
        @click="onStart"
      >
        Start
      </button>
    </div>
  </div>
</template>
