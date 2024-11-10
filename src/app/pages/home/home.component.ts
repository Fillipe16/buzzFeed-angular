import { Component, OnInit } from '@angular/core';
import * as quizz from '../../../assets/data/quizzFeed.json';
import { Question } from '../../../common/model/question';

type indexQuestionType = {
  "questionIndex":number;
  "idResposta":number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  
  quizz: any = (quizz as any).default;
  perguntaCentral!: string;
  perguntas!: Question[];
  indexQuestion: number = 0;
  listaRows: number[] = [];
  listaColumns = Array.from({ length: 2 }, (_, i) => i);
  lastRow: number = 0;
  pontuacaoCategorias: number = 0;


  constructor(){
    this.perguntaCentral = quizz.perguntaCentral;
    this.perguntas = quizz.perguntas;    

    const quantidadeLinhasRespostas = Math.floor(this.perguntas[this.indexQuestion].respostas.length/2)
    this.listaRows = Array.from({ length: quantidadeLinhasRespostas }, (_, i) => i);
  }

  changeQuestion(event: indexQuestionType){
    this.totalizaPontos(event.idResposta);
    this.indexQuestion = event.questionIndex;
    
  }

  private totalizaPontos(idResposta: number){
    const resposta = this.perguntas[this.indexQuestion].respostas.filter(res => res.id == idResposta);
    if(resposta && resposta.length > 0){      
      this.pontuacaoCategorias+=resposta[0].pontos;
    } 
  }

  getResult(): string{
    if(this.pontuacaoCategorias <5 ){
      return "Neutro";
    }
    if(this.pontuacaoCategorias <= 14){
      return "Vilão";
    }
    if(this.pontuacaoCategorias < 25){
      return "Anti-herói";
    }
    return "Herói";
  }
}
