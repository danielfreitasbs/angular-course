import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { DropdownService } from './services/dropdown.service';



@NgModule({
  declarations: [CampoControlErroComponent, FormDebugComponent],
  imports: [
  CommonModule
  ],
  exports: [
    CampoControlErroComponent,
    FormDebugComponent,
    HttpClientModule
  ],
  providers: [ DropdownService ]

})
export class SharedModule { }
