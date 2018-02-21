/**
 * Created by Amrane Ait Zeouay on 20-Feb-18.
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialog } from '@angular/material';

import { AppService } from '../services/app.service';
import { QuizList } from '../services/interfaces/QuizList';
import { ResultDialogComponent } from '../shared/dialog/result.dialog.component';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

export class QuizComponent implements OnInit {

  private quiz: QuizList;
  private quizId: string;
  private result: number = 0;
  private previousResult = {
    id: 0,
    result: 0
  };

  constructor(private service: AppService,
              public dialog: MatDialog,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.quizId = params['id'];
    });
    var quiz = this.service.getQuiz(parseInt(this.quizId));
    quiz != undefined ? quiz.subscribe(quiz => this.quiz = quiz) : this.router.navigate(['/']);
    this.service.fetchLastResult(this.quizId).subscribe(data => {
        this.previousResult.id = data.id;
        this.previousResult.result = data.result;
    });
  }

  onSelectionChange(answer, rightAnswer) {
    answer === rightAnswer ? this.result++ : --this.result;
    if (this.result < 0) {
      this.result = 0;
    }
  }

  saveQuizResult() {
    this.service.saveQuizResult(this.quiz.id, this.result);
    this.openDialog();
  }

  //TODO maybe we should return to home screen to select another quiz
  openDialog(): void {
    var totalQuestions = '/' + this.quiz.questions.length;
    this.dialog.open(ResultDialogComponent, {
      width: '250px',
      panelClass: 'result-dialog',
      data: { result: this.result + totalQuestions, previousResult: this.previousResult.result + totalQuestions}
    });
  }
}
