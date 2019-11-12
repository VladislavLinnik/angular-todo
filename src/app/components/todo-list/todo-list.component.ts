import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/core/services/todo.service';
import { Task } from 'src/app/core/models/task.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  tasks: Promise<Task>;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.tasks = this.todoService.getTasks();
  }


}
