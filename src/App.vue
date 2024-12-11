<script setup lang="ts">
import QuestionCard from './components/QuestionCard.vue';
import questions from '../questions.json';
</script>

<template>
  <QuestionCard :item="questions[0]" />
</template>

<style scoped></style>
