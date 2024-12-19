<script setup lang="ts">
import { useQuizStore } from '../../store/quiz';
import QuestionCard from '../QuestionCard.vue';

const store = useQuizStore();
</script>

<template>
  <QuestionCard :item="store.questions[0]" />
</template>
