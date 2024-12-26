import { defineStore } from 'pinia';
import questions from '../../questions.json';
import { ref } from 'vue';

export const useQuizStore = defineStore('quiz', () => {
  const currentQuestion = ref(questions[0]);
  const score = ref(0);

  function nextQuestion() {
    if (currentQuestion.value.order === questions.length) {
      return;
    }
    currentQuestion.value = questions[currentQuestion.value.order];
  }

  function incrementScore() {
    score.value++;
  }

  function checkAnswer(choice: string): boolean {
    if (choice === currentQuestion.value.answer) {
      incrementScore();
      return true;
    }
    return false;
  }

  return {
    questions,
    nextQuestion,
    currentQuestion,
    score,
    checkAnswer,
  };
});
