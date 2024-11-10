import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { QuestionComponent } from '../../components/question/question.component';
import { AnswersComponent } from '../../components/answers/answers.component';



@NgModule({
  declarations: [
    HomeComponent,
    QuestionComponent,
    AnswersComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HomeComponent,
    QuestionComponent,
    AnswersComponent,
  ]
})
export class HomeModule { }
