/**
 * Created by Amrane Ait Zeouay on 20-Feb-18.
 */
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AppService } from '../services/app.service';
import { QuizList } from '../services/interfaces/QuizList';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})

export class QuizListComponent implements OnInit {

  private quizList: Observable<QuizList[]>;

  constructor(private service: AppService) {}

  ngOnInit() {
    this.quizList = this.service.fetchQuizList();
  }
}
