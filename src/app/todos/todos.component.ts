import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  //define data types
  todos: any = [];
  todo: any;
  action: any;
  name: any;
  isDone: boolean;
  constructor(private todoService: TodosService) { }
  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  } addTodos(event) {
    event.preventDefault();
    let newTodo = {
      name: this.name,
      action: this.action,
      isDone: false
    };
    this.todoService.addTodos(newTodo).subscribe(todo => {
      this.todos.push(todo);
      this.name = '';
      this.action = '';
    });
  } deleteTodo(id) {
    let todos = this.todos;
    this.todoService.deleteTodo(id).subscribe(data => {
      const index = this.todos.findIndex(todo => todo._id == id);
      todos.splice(index, 1)
    });
  } updateStatus(todo) {
    var _todo = {
      _id: todo._id,
      action: todo.action,
      isDone: !todo.isDone
    };
    this.todoService.updateStatus(_todo).subscribe(data => {
      const index = this.todos.findIndex(todo => todo._id == _todo._id)
      this.todos[index] = _todo;
    });
  } choice(todo) {
    console.log(todo);
    return todo.isDone;
  }
}