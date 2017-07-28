import { Route } from '@angular/router';

export const accountRoute: Route = {
    path: 'account',
    loadChildren: './account/account.module#JhipsterAccountModule'
};

export const entityRoute: Route = {
    path: 'entity',
    loadChildren: './entities/entity.module'
};

export const modulesRoute: Route = {
    path: 'modules',
    loadChildren: './modules/modules.module#ModulesModule'
};
