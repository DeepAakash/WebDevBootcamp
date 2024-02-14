import { Component, EventEmitter, Output } from '@angular/core';
import {Tasks} from 'src/app/Tasks';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  title: string;
  desc: string;
  @Output() taskAdd: EventEmitter<Tasks> = new EventEmitter();

  constructor(){}

  onSubmit(){
    const task={
      sno: 8,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.taskAdd.emit(task);
  }
}
