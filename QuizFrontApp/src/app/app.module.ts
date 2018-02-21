import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule,
        MatListModule,
        MatCardModule,
        MatDialogModule,
        MatButtonModule,
        MatRadioModule
} from "@angular/material";
import { AvatarModule } from 'ng2-avatar';

import { AppComponent } from './app.component';
import { AppRoutes } from "./routes/app.routing";
import { AppService } from "./services/app.service";
import { QuizListComponent } from "./quizzes/quizzes.component";
import { QuizComponent } from "./quiz/quiz.component";
import { ResultDialogComponent } from './shared/dialog/result.dialog.component';

@NgModule({
  exports: [
    MatButtonModule,
    MatListModule,
    MatDialogModule,
    MatCardModule,
    MatRadioModule,
    MatSelectModule,
  ]
})
export class MaterialModule {}

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuizListComponent,
    ResultDialogComponent
  ],
  entryComponents: [
    ResultDialogComponent
  ],
  imports: [
    MaterialModule,
    HttpClientModule,
    AvatarModule.forRoot(),
    RouterModule.forRoot(AppRoutes),
    BrowserAnimationsModule,
    BrowserModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
