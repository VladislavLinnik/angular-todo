import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) { }

  getTasks(): Promise<Task> {
    return this.http.get<Task>('http://localhost:3000/tasks').toPromise();
  }
}
