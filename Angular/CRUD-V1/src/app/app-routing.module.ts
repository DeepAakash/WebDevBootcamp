import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './MyComponents/tasks/tasks.component';
import { AboutComponent } from './MyComponents/about/about.component';

const routes: Routes = [
  {path: '', component:TasksComponent},
  {path: 'about', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
