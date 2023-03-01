import { Component, OnInit, Input, Self, ViewChild, ElementRef, Optional, forwardRef, EventEmitter, Output } from '@angular/core';
import { ControlValueAccessor, Validator, NgControl, ValidatorFn, Validators, AbstractControl, ValidationErrors, NG_VALUE_ACCESSOR, NgModel } from '@angular/forms';

@Component({
    selector: 'app-custom-input',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CustomInputComponent), multi: true }]
})
export class CustomInputComponent implements OnInit {
    @Input() inputType: 'text' | 'password' = 'text';
    @Input() placeholder: string = '';
    @Input() value: any = '';
    @Input() isRequired: boolean = true;
    @Input() isValid: boolean = true;
    @Input() label: string = 'name';
    @Input() errorMsg: string = 'fill input';
    @Input() pattern: string = '';

    @Output() setValue: EventEmitter<any> = new EventEmitter<any>();

    @ViewChild('inputElement', { static: false }) inputElement: ElementRef;

    constructor() {
    }

    ngOnInit(): void {
    }

} 
