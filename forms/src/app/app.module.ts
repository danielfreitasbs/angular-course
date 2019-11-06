import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DataFormModule } from './data-form/data-form.module';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    DataFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
