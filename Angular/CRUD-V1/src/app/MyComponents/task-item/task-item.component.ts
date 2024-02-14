import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Tasks} from 'src/app/Tasks';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task: Tasks;
  @Input() i:number;
  @Output() taskDelete: EventEmitter<Tasks> = new EventEmitter();
  @Output() taskCheckbox: EventEmitter<Tasks> = new EventEmitter();

  onClick(task:Tasks){
    this.taskDelete.emit(task);
    console.log("Delete btn clicked");
  }
  onCheckboxClick(task:Tasks){
    this.taskCheckbox.emit(task);
  }
}
