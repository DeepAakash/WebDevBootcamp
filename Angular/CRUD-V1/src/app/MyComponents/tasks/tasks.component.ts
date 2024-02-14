import { Component } from '@angular/core';
import {Tasks} from '../../Tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  localItem: string;
  tasks: Tasks[];

  constructor(){
    this.localItem=localStorage.getItem("tasks");
    if(this.localItem==null){
      this.tasks=[];
    }else{
      this.tasks=JSON.parse(this.localItem);
    }
  }
  ngOnInit(): void{}
  addTask(task:Tasks){
    console.log(task);
    this.tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
  deleteTask(task:Tasks){
    console.log(task);
    var index=this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
  toggleTask(task:Tasks){
    console.log(task);
    var index=this.tasks.indexOf(task);
    this.tasks[index].active=!this.tasks[index].active;
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
}
