import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSharedModule } from '../../shared';
import { customHttpProvider } from '../../blocks/interceptor/http.provider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { MdTabsModule } from '@angular/material';
import { MyDatePickerModule } from 'mydatepicker';
import { SchemaComponent } from './schema.component';
import { SmartFormAdminModule } from './smart-form/smart-form.module';
import { SmartFormFieldAdminModule } from './smart-form/smart-form-field/smart-form-field.module';

@NgModule({
    imports: [
        JhipsterSharedModule,
        MyDatePickerModule,
        FormsModule,
        ReactiveFormsModule,
        CustomFormsModule,
        RouterModule,
        MdTabsModule,
        SmartFormAdminModule,
        SmartFormFieldAdminModule,
    ],
    declarations: [
        SchemaComponent,
    ],
    providers: [
        customHttpProvider(),
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SchemaAdminModule { }
