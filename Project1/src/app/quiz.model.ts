export class Quiz {
  question: string;
  answer: { option: string; correct: boolean }[];

  constructor(que: string, ans: any) {
    this.answer = ans;
    this.question = que;
  }
}
