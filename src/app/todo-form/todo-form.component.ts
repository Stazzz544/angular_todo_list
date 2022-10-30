import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
  inputText=""
  @Output() onAddTodo = new EventEmitter<{text: string, id: number, checked: boolean}>();
  constructor() {}

  addTodo() {
    const todo = {text: this.inputText, id: Date.now(), checked: false}
    this.inputText="";
    this.onAddTodo.emit(todo);
  }
}
