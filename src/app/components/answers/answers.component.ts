import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Answer } from '../../../common/model/answer';

type indexQuestionType = {
  "questionIndex":number;
  "idResposta":number;
}

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrl: './answers.component.css'
})
export class AnswersComponent {
  @Output() isPerguntaRespondida =  new EventEmitter<indexQuestionType>;
  @Input()
  resposta!: Answer;
  @Input() questionIndex: number = 0;
  
  onPerguntaRespondida(){
    this.isPerguntaRespondida.emit({
      "questionIndex":this.questionIndex+1,
      "idResposta":this.resposta.id
  })
  }

  getClassFromIndex(){
    if(this.resposta.id % 2 == 0){
      return "alinhar-direita";
    }
    return "alinhar-esquerda";
  }

}
