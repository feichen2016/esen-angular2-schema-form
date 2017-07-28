import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { customHttpProvider } from '../blocks/interceptor/http.provider';

/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [
        customHttpProvider(),
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterEntityModule {}
