import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Todo} from '../models/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  title: string;
  @Output() addToDo: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    const todo = {
      title: this.title,
      completed: false
    }
    console.log(todo)
    this.addToDo.emit(todo);
  }

}
