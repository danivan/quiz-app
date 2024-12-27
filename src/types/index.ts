export type Question = {
  question: string;
  choices: string[];
  answer: string;
  order: number;
  timeLimit?: number;
};
