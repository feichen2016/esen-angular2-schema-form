import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { customHttpProvider } from '../../../blocks/interceptor/http.provider';
import { ListDynamicModule } from '../../shared/components/list/list-dynamic.module';
import { DetailDynamicModule } from '../../shared/components/detail/detail-dynamic.module';
import { DynamicFormModule } from '../../shared/components/base/dynamic.module';
import { SchemaService } from '../../shared/components/schema.service';
import { JhipsterAppModule } from '../../../app.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdTabsModule } from '@angular/material';
import { SmartFormService } from './smart-form.service';
import { ResolvePagingParams } from '../../utils.service';
import { SmartFormEditComponent } from './smart-form-edit.component';
import { SmartFormDetailComponent } from './smart-form-detail.component';
import { SmartFormListComponent } from './smart-form-list.component';

@NgModule({
  imports: [
    ListDynamicModule,
    DetailDynamicModule,
    DynamicFormModule,
    RouterModule,
    FormsModule,
    CommonModule,
    MdTabsModule,
    // RouterModule.forChild(ENTITY_STATES),
  ],
  exports: [
    SmartFormListComponent
  ],
  declarations: [
    SmartFormListComponent,
    SmartFormDetailComponent,
    SmartFormEditComponent,
  ],
  providers: [
    SmartFormService,
    customHttpProvider(),
    ResolvePagingParams,
    SchemaService,
],
})
export class SmartFormAdminModule {}
