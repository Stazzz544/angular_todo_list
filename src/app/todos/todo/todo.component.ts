import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  @Input('todo') todo: {text: string, id: number, checked: boolean} = {text: '', id: 0, checked: false}
  @Output() onDelTodo = new EventEmitter<number>();
  @Output() onCheckTodo = new EventEmitter<number>();

  constructor() {}

  delTodo(id: number){
    this.onDelTodo.emit(id)
  }

  checkTodo(id: number){
    this.onCheckTodo.emit(id)
  }
}
