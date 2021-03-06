/**
 * Created by Amrane Ait Zeouay on 20-Feb-18.
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { QuizList } from './interfaces/QuizList';
import { environment } from '../../environments/environment';

@Injectable()
export class AppService {

    private quizList : Observable<QuizList[]>;

    constructor(private http: HttpClient) {}

    /**
    *   Get all quizzes 
    *   @returns Observable of QuizList[]
    */
    //TODO Implement snackbar if the server is down
    fetchQuizList(): Observable<QuizList[]> {
        return this.quizList = this.http.get<QuizList[]>(environment.api_url + 'quiz');
    }

    /**
    *   Get the last result of a specific quiz
    *   @param id quiz id
    *   @returns result with structure {id: string, result: number}
    */
    fetchLastResult(quizId): Observable<any> {
        return this.http.get(environment.api_url + 'quiz/result/' + quizId);
    }

    /**
    *   Save the quiz resul
    *   @param quizId quiz id, result which is the result of that specific quiz
    */
    saveQuizResult(quizId, result) {
        return this.http.post(environment.api_url + 'quiz/result/' + quizId, {result: result}).subscribe(
          res => {
            console.log(res);
          },
          err => {
            console.log("Error occured");
          });
    }

    /**
    *   Get the quiz from id
    *   @param id quiz id 
    *   @returns QuizList
    */
    getQuiz(id: number) {
        return this.quizList != undefined ? this.quizList.map(quizzes => quizzes.find(quiz => quiz.id === id)) : undefined;
    }
}
