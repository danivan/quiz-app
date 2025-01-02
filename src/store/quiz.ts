import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Question } from '../types';

export const useQuizStore = defineStore('quiz', () => {
  const router = useRouter();
  const currentQuestion = ref<Question>();
  const score = ref(0);
  const timeLeft = ref<number>(0);
  const timeOutId = ref();

  const questions = ref<Question[]>([]);
  async function fetchQuestions() {
    const response = await fetch('questions.json');
    questions.value = (await response.json()) as Question[];
    currentQuestion.value = questions.value[0];
    timeLeft.value = questions.value[0].timeLimit || 0;
    tick();
  }

  function nextQuestion() {
    if (!currentQuestion.value) return;

    if (currentQuestion.value.order === questions.value.length) {
      router.replace('/result');
      return;
    }

    const nextQuestion = questions.value[currentQuestion.value.order];
    if (nextQuestion) {
      currentQuestion.value = nextQuestion;
      timeLeft.value = currentQuestion.value.timeLimit || 0;
      clearTimeout(timeOutId.value);
      tick();
    } else {
      console.error('Next question not found');
    }
  }

  function incrementScore() {
    score.value++;
  }

  function checkAnswer(choice: string): boolean {
    if (choice === currentQuestion.value?.answer) {
      incrementScore();
      return true;
    }
    return false;
  }

  function reset() {
    currentQuestion.value = questions.value[0];
    score.value = 0;
    router.replace('/');
  }

  function tick() {
    if (timeLeft.value > 0) {
      timeLeft.value--;
      timeOutId.value = setTimeout(tick, 1000);
    }
  }

  return {
    questions,
    nextQuestion,
    currentQuestion,
    score,
    checkAnswer,
    fetchQuestions,
    reset,
    tick,
    timeLeft,
  };
});
