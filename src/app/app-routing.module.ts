import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewContactComponent } from './new-contact/new-contact.component';
import { ListContactComponent } from './list-contact/list-contact.component';


const routes: Routes = [
  {
    path: "new-contact",
    component: NewContactComponent
  },
  {
    path: "list-contacts",
    component: ListContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
