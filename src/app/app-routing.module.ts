import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes = [
  { path:'todolist',component:TodolistComponent},
  {path:'',component:AppComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
