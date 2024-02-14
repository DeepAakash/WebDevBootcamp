import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './MyComponents/tasks/tasks.component';
import { TaskItemComponent } from './MyComponents/task-item/task-item.component';
import { AddTaskComponent } from './MyComponents/add-task/add-task.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './MyComponents/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
