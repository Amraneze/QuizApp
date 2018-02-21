export interface QuizQuestion {

  question:string;
  answer:string;
  options:String[];

}

export interface QuizList {

  id:number;
  difficulty:string;
  questions:QuizQuestion[];

}
