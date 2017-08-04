import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { SmartFormListComponent } from './smart-form-list.component';
import { SmartFormDetailComponent } from './smart-form-detail.component';
import { SmartFormEditComponent } from './smart-form-edit.component';
import { ResolvePagingParams } from '../../utils.service';
import { smartFormFieldRoutes } from './smart-form-field/smart-form-field.route';

export const smartFormRoutes: Routes = [
    {
        path: 'smart-form-list',
        component: SmartFormListComponent,
        resolve: {
            'pagingParams': ResolvePagingParams,
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'esenadminwebhrmApp.organization.home.title',
        },
        canActivate: [UserRouteAccessService],
    },
    {
        path: 'smart-form/detail/:id',
        component: SmartFormDetailComponent,
        resolve: {
            'pagingParams': ResolvePagingParams,
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'esenadminwebhrmApp.organization.home.title',
        },
        canActivate: [UserRouteAccessService],
    },
    {
        path: 'smart-form/edit/:id',
        component: SmartFormEditComponent,
        resolve: {
            'pagingParams': ResolvePagingParams,
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'esenadminwebhrmApp.organization.home.title',
        },
        canActivate: [UserRouteAccessService],
    },
    {
        path: 'smart-form/create',
        component: SmartFormEditComponent,
        resolve: {
            'pagingParams': ResolvePagingParams,
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'esenadminwebhrmApp.organization.home.title',
        },
        canActivate: [UserRouteAccessService],
    },
    ...smartFormFieldRoutes,
];

