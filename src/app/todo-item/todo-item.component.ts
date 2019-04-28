import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Todo} from '../models/Todo';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter()
  constructor(private  todoService: TodoService) {
  }

  ngOnInit() {
  }

  // set dynamic classes
  setClasses() {
    return {
      todo: true,
      'is-completed': this.todo.completed
    };
  }


  onToggle(todo) {
    todo.completed = !todo.completed;
    this.todoService.getCompleted(todo).subscribe(todo => {
      console.log('updating id ', todo.id);
    });
  }

  onDelete(todo) {
    console.log(todo.id)
    this.deleteTodo.emit(todo);
  }
}
