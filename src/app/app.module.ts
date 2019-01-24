import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AppRouting } from './app-routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Services } from './services/user.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    AppRouting,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [Services, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
