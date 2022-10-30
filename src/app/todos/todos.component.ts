import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})

export class TodosComponent {
    
  todos: Array<{text: string, id: number, checked: boolean}>= [];
  errorText = ''
  constructor() { }

  addTodo(todo: {text: string, id: number, checked: boolean}) {
    if(todo.text.length === 0) {
        this.errorText = 'you should write something'
    } else {
        this.errorText = ''
        this.todos.push(todo)
    }
    
  }

  delTodo(todoId: number){
    const filtredTodo = this.todos.filter(todo => {
        return todo.id !== todoId || todo.checked === false
    })
    if (filtredTodo.length === this.todos.length) {
        this.errorText = 'you should check todo you want remove'
    } else {
        this.errorText = ''
    }
    this.todos = filtredTodo
  }

  checkTodo(todoId: number){
    this.todos.forEach(todo => {
        if (todo.id === todoId) todo.checked = !todo.checked
    })
  }

}
