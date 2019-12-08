import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routhing/app-routhing.module';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { GetComponent } from './get/get.component';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
