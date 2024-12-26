import { defineStore } from 'pinia';
import questions from '../../questions.json';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export const useQuizStore = defineStore('quiz', () => {
  const router = useRouter();
  const currentQuestion = ref(questions[0]);
  const score = ref(0);

  function nextQuestion() {
    if (currentQuestion.value.order === questions.length) {
      router.replace('/result');
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

  function reset() {
    currentQuestion.value = questions[0];
    score.value = 0;
    router.replace('/');
  }

  return {
    questions,
    nextQuestion,
    currentQuestion,
    score,
    checkAnswer,
    reset,
  };
});
