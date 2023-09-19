import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  newTask = '';
  tasks: string[] = [];

  constructor() {
    // Load tasks from local storage when the component initializes
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
    }
  }

  addTask() {
    if (this.newTask.trim() !== '') {
      // Check for text length and special characters
      if (this.newTask.length >= 4 && this.newTask.length <= 200 && /^[a-zA-Z0-9\s]*$/.test(this.newTask)) {
        this.tasks.push(this.newTask.trim());
        this.newTask = '';

        // Save tasks to local storage
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      } else {
        alert('Please enter a valid task description between 4 and 200 characters without special characters.');
      }
    }
  }

  removeTask(index: number) {
    // Remove the task from the array and local storage
    this.tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
