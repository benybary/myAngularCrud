import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routhing/app-routhing.module';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import {ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { GetComponent } from './get/get.component';
import {HttpClientModule} from '@angular/common/http';
import {ProductService} from './product.service'

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditComponent,
    GetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
