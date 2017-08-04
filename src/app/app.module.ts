import './vendor.ts';
import { NgModule, Injectable } from '@angular/core';
import { Ng2Webstorage } from 'ng2-webstorage';
import { RouterModule } from '@angular/router';
import { JhipsterSharedModule, UserRouteAccessService } from './shared';
import { JhipsterHomeModule } from './home/home.module';
import { JhipsterAccountModule } from './account/account.module';
import { JhipsterEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';
import { entityRoute, accountRoute, modulesRoute } from './lazy.route';
import { BaseRequestOptions, RequestOptionsArgs, RequestOptions } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    EsenMainComponent,
    LayoutRoutingModule,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent,
} from './layouts';
import {ModulesModule} from './modules/modules.module';

@Injectable()
export class AuthRequestOptions extends BaseRequestOptions {

    merge(options?: RequestOptionsArgs): RequestOptions {
        const newOptions = super.merge(options);
        newOptions.headers.set('Content-Type', 'application/json');
        return newOptions;
    }
}

const LAZY_ROUTES = [
    accountRoute,
    entityRoute,
    modulesRoute
];

@NgModule({
    imports: [
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'esen', separator: '-' }),
        RouterModule.forChild(LAZY_ROUTES),
        JhipsterSharedModule,
        JhipsterHomeModule,
        FormsModule,
        BrowserModule,
        CommonModule,
        ModulesModule,
        // NgbModule.forRoot(),
        BrowserAnimationsModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        EsenMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [EsenMainComponent]
})
export class JhipsterAppModule { }
