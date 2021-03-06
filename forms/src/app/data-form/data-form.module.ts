import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DataFormComponent } from './data-form.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DataFormComponent,
  ],
  imports: [
  CommonModule,
    ReactiveFormsModule,
    SharedModule,
    HttpModule
  ]
})
export class DataFormModule { }
