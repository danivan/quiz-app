<script setup lang="ts">
import QuestionCard from './components/QuestionCard.vue';
import { useQuizStore } from './store/quiz';

const store = useQuizStore();

const questions = store.questions;
</script>

<template>
  <QuestionCard :item="questions[0]" />
</template>

<style scoped></style>
