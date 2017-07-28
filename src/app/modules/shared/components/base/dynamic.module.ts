import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
    DynamicFormComponent,
    DynamicFormOptionComponent,
} from './';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';

const ENTITY_STATES = [
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        DynamicFormComponent,
        DynamicFormOptionComponent,
    ],
    entryComponents: [
        DynamicFormComponent,
        DynamicFormOptionComponent,
    ],
    providers: [
    ],
    exports: [
        DynamicFormComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DynamicFormModule {}
