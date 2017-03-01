import {Injectable} from '@angular/core';

@Injectable()
export class TodoService {

  private _todoList = [
    { text: 'Paper on Donald Trump' },
    { text: 'Lab Study on Polymer and other MVWs' },
    { text: 'Speak in a new Language' },
    { text: 'Paper on the future of Cobal' },
    { text: 'Simul erroribus ad usu' },
    { text: 'Ei cum solet appareat, ex est graeci mediocritatem' },
    { text: 'Get in touch with akveo team' },
    { text: 'Write email to business cat' },
    { text: 'Have fun with Phil' },
    { text: 'What do you think?' },
  ];

  getTodoList() {
    return this._todoList;
  }
}
