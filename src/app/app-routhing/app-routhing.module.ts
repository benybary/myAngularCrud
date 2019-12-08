import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component'
import { AddComponent } from '../add/add.component';
import { EditComponent } from '../edit/edit.component';
import { GetComponent } from '../get/get.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'product/create',
    component: AddComponent
  },
  {
    path: 'product/edit/:id',
    component: EditComponent
  },
  {
    path: 'product',
    component: GetComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
