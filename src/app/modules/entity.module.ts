import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { OrganizationAdminModule } from './organization/organization-hrm.module';

@NgModule({
    imports: [
       OrganizationAdminModule,
        // EsenadminwebHrmSharedCityDropdownModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EntityModule { }
