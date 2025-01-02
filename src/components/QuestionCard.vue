<script setup lang="ts">
import { ref } from 'vue';
import { useQuizStore } from '../store/quiz';
import ChoiceButton from './ChoiceButton.vue';
import FloatingCard from './FloatingCard.vue';
import CountdownTimer from './CountdownTimer.vue';

const store = useQuizStore();
await store.fetchQuestions();

const cardBorderClass = ref<string>('');

function onAnswerSelected(choice: string) {
  const isAnswerCorrect = store.checkAnswer(choice);
  cardBorderClass.value = isAnswerCorrect ? 'correct' : 'incorrect';

  setTimeout(() => {
    cardBorderClass.value = '';
    store.nextQuestion();
  }, 500);
}
</script>
<template>
  <CountdownTimer
    v-if="store.currentQuestion?.timeLimit"
    v-bind:time="store.timeLeft"
    @time-up="onAnswerSelected('')"
    class="absolute right-8 top-8"
  />
  <FloatingCard class="relative">
    <div
      class="grid grid-cols-4 gap-4 p-4 h-full w-full rounded-xl items-center"
      :class="cardBorderClass"
    >
      <p class="text-2xl col-span-4 text-center">
        {{ store.currentQuestion?.question }}
      </p>
      <ChoiceButton
        v-for="choice in store.currentQuestion?.choices"
        :choice="choice"
        @answer-selected="onAnswerSelected"
      >
        {{ choice }}
      </ChoiceButton>
    </div>
  </FloatingCard>
</template>

<style lang="css" scoped>
.correct {
  border-style: solid;
  border-color: green;
  border-width: 2px;
}

.incorrect {
  border-style: solid;
  border-color: red;
  border-width: 2px;
}
</style>
