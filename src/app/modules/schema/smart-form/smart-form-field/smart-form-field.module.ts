import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { customHttpProvider } from '../../../../blocks/interceptor/http.provider';
import { ListDynamicModule } from '../../../shared/components/list/list-dynamic.module';
import { DetailDynamicModule } from '../../../shared/components/detail/detail-dynamic.module';
import { DynamicFormModule } from '../../../shared/components/base/dynamic.module';
import { SchemaService } from '../../../shared/components/schema.service';
import { JhipsterAppModule } from '../../../../app.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdTabsModule } from '@angular/material';
import { SmartFormFieldService } from './smart-form-field.service';
import { ResolvePagingParams } from '../../../utils.service';
import { SmartFormFieldEditComponent } from './smart-form-field-edit.component';
import { SmartFormFieldDetailComponent } from './smart-form-field-detail.component';
import { SmartFormFieldListComponent } from './smart-form-field-list.component';
import { SmartFormFieldDeleteComponent } from './smart-form-field-delete.component';

@NgModule({
  imports: [
    ListDynamicModule,
    DetailDynamicModule,
    DynamicFormModule,
    RouterModule,
    FormsModule,
    CommonModule,
    MdTabsModule,
  ],
  exports: [
    SmartFormFieldListComponent
  ],
  declarations: [
    SmartFormFieldDeleteComponent,
    SmartFormFieldListComponent,
    SmartFormFieldDetailComponent,
    SmartFormFieldEditComponent,
  ],
  providers: [
    SmartFormFieldService,
    customHttpProvider(),
    ResolvePagingParams,
    SchemaService,
  ],
})
export class SmartFormFieldAdminModule { }
