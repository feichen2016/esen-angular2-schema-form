import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSharedModule } from '../../shared';
import { customHttpProvider } from '../../blocks/interceptor/http.provider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { MdTabsModule } from '@angular/material';
import {
    OrganizationHrmComponent,
    organizationRoute,
    OrganizationHrmResolvePagingParams,
} from './';
import { OpenModalService } from '../modal.service';
import { MyDatePickerModule } from 'mydatepicker';
import { CompanyHrmModule } from './company/company-hrm.module';
import {DemoModule} from "./demo/demo.module";

const ENTITY_STATES = [
    ...organizationRoute,
];

@NgModule({
    imports: [
        JhipsterSharedModule,
        MyDatePickerModule,
        FormsModule,
        ReactiveFormsModule,
        CustomFormsModule,
        CompanyHrmModule,
        DemoModule,
        RouterModule,
        MdTabsModule,
        // RouterModule.forChild(ENTITY_STATES),
    ],
    declarations: [
        OrganizationHrmComponent,
    ],
    providers: [
        OrganizationHrmResolvePagingParams,
        OpenModalService,
        customHttpProvider(),
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OrganizationAdminModule { }
