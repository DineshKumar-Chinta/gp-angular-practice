import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DLoginComponent } from './d-login/d-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { MaterialModule } from '../material.module';




@NgModule({
  declarations: [
    DLoginComponent,
    SignupComponent,
    FileuploadComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class DineshModule { }
