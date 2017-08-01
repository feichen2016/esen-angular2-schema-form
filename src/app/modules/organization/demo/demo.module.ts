import { NgModule } from '@angular/core';

import { DemoResolvePagingParams, demoRoute } from './demo.route';
import { RouterModule } from '@angular/router';
import { DemoService } from './demo.service';
import { DemoListComponent } from './demo-list.component';
import { customHttpProvider } from '../../../blocks/interceptor/http.provider';
import { DemoDetailComponent } from './demo-detail.component';
import { DemoEditComponent } from './demo-edit.component';
import { ListDynamicModule } from '../../shared/components/list/list-dynamic.module';
import { DetailDynamicModule } from '../../shared/components/detail/detail-dynamic.module';
import { DynamicFormModule } from '../../shared/components/base/dynamic.module';
import { SchemaService } from '../../shared/components/schema.service';
import {JhipsterAppModule} from '../../../app.module';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MdTabsModule } from '@angular/material';
const ENTITY_STATES = [
  ...demoRoute,
];
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
    DemoListComponent
  ],
  declarations: [
    DemoListComponent,
    DemoDetailComponent,
    DemoEditComponent,
  ],
  providers: [
    DemoService,
    customHttpProvider(),
    DemoResolvePagingParams,
    SchemaService,
],
})
export class DemoModule {}

