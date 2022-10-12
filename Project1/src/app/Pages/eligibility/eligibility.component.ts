import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/quiz.model';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-eligibility',
  templateUrl: './eligibility.component.html',
  styleUrls: ['./eligibility.component.css'],
})
export class EligibilityComponent implements OnInit {
  quizzes: Quiz[] = [];

  currentQuiz = 0;

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.quizzes = this.serviceService.getQuizzes();
  }
}
