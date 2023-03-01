import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from './app.component';
import { FormsModule } from '@angular/forms';


// import {  } from "ddde";
@NgModule({
    declarations: [
         CustomInputComponent
    ],
    imports: [
        CommonModule,
        FormsModule,


    ],
    exports: [CustomInputComponent]
})
export class CustomInputModule { }
