import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ListDynamicFormComponent } from './list-dynamic-form.component';
import {JhipsterAppModule} from '../../../../app.module';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const ENTITY_STATES = [
];

@NgModule({
    imports: [
      CommonModule,
      NgbModule,
    ],
    declarations: [
        ListDynamicFormComponent,
    ],
    entryComponents: [
        ListDynamicFormComponent,
    ],
    providers: [
    ],
    exports: [
        ListDynamicFormComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ListDynamicModule {}
