import { defineStore } from 'pinia';
import questions from '../../questions.json';

export const useQuizStore = defineStore('quiz', () => {
  return {
    questions,
  };
});
