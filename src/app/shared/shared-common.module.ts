import { NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';

import {
    JhipsterSharedLibsModule,
    JhiLanguageHelper,
    FindLanguageFromKeyPipe,
    EsenAlertComponent,
    EsenAlertErrorComponent
} from './';

@NgModule({
    imports: [
        JhipsterSharedLibsModule
    ],
    declarations: [
        FindLanguageFromKeyPipe,
        EsenAlertComponent,
        EsenAlertErrorComponent
    ],
    providers: [
        JhiLanguageHelper,
        Title
    ],
    exports: [
        JhipsterSharedLibsModule,
        FindLanguageFromKeyPipe,
        EsenAlertComponent,
        EsenAlertErrorComponent
    ]
})
export class JhipsterSharedCommonModule {}
