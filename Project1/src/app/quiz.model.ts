export class Quiz {
  question: string;
  answer: { option: string; correct: boolean }[];
  
  constructor(que, ans) {
    this.answer = ans;
    this.question = que;
  }
}
