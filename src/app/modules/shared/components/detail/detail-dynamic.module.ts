import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { DetailDynamicFormComponent } from './detail-dynamic-form.component';
import {CommonModule} from '@angular/common';

const ENTITY_STATES = [
];

@NgModule({
    imports: [
      CommonModule,
    ],
    declarations: [
        DetailDynamicFormComponent,
    ],
    providers: [
    ],
    exports: [
        DetailDynamicFormComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DetailDynamicModule {}
