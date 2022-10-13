import { Injectable } from '@angular/core';
import { Quiz } from './quiz.model';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  quizzes: Quiz[] = [
    {
      question: 'Are you 65(+) years or older? a',
      answer: [
        { option: 'Yes', correct: true },
        { option: 'No', correct: false },
      ],
    },
    {
      question:
        'Have you worked at least 10 years for which you paid Medicare taxes?',
      answer: [
        { option: 'Yes', correct: true },
        { option: 'No', correct: false },
      ],
    },
    {
      question: 'Do you live in the U.S. or one of its territories?',
      answer: [
        { option: 'Yes', correct: true },
        { option: 'No', correct: false },
      ],
    },
    {
      question:
        'Do you get group health benefits through your, your spouse’s or your family member’s current employer?',
      answer: [
        { option: 'Yes', correct: true },
        { option: 'No', correct: false },
      ],
    },
  ];

  constructor() {}

  getQuizzes() {
    return this.quizzes;
  }
}
