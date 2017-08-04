import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ResolvePagingParams } from './utils.service';
import { SchemaAdminModule } from './schema/schema.module';

@NgModule({
    imports: [
       SchemaAdminModule,
    ],
    declarations: [],
    entryComponents: [],
    providers: [
      ResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EntityModule { }
