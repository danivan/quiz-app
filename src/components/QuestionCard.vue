<script setup lang="ts">
import { ref } from 'vue';
import { useQuizStore } from '../store/quiz';
import ChoiceButton from './ChoiceButton.vue';

const store = useQuizStore();

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
  <div class="h-screen flex items-center justify-center">
    <div
      class="border-2 border-solid grid grid-cols-4 gap-4 rounded-xl bg-white p-4 shadow-xl w-1/3 h-1/2 self-center items-center justify-center"
      :class="cardBorderClass"
    >
      <p class="text-2xl col-span-4 text-center">
        {{ store.currentQuestion.question }}
      </p>
      <ChoiceButton
        v-for="choice in store.currentQuestion.choices"
        :choice="choice"
        @answer-selected="onAnswerSelected"
      >
        {{ choice }}
      </ChoiceButton>
    </div>
  </div>
</template>

<style lang="css" scoped>
.correct {
  border-color: green;
}

.incorrect {
  border-color: red;
}
</style>
