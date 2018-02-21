/**
 * Created by Amrane Ait Zeouay on 20-Feb-18.
 */
import { Routes } from '@angular/router';
import { QuizComponent } from "../quiz/quiz.component";
import {QuizListComponent} from "../quizzes/quizzes.component";

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: '/app',
        pathMatch: 'full'
    },
    {
        path: 'app',
        component: QuizListComponent
    },
    {
        path: 'quiz/:id',
        component: QuizComponent
    }
];
