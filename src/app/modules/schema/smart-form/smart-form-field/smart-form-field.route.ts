import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { SmartFormFieldListComponent } from './smart-form-field-list.component';
import { ResolvePagingParams } from '../../../utils.service';
import { SmartFormFieldDetailComponent } from './smart-form-field-detail.component';
import { SmartFormFieldEditComponent } from './smart-form-field-edit.component';

export const smartFormFieldRoutes: Routes = [
     {
     path: 'smart-form-field-list',
     component: SmartFormFieldListComponent,
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
         path: 'smart-form-field/detail/:id',
        component: SmartFormFieldDetailComponent,
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
         path: 'smart-form-field/edit/:id',
         component: SmartFormFieldEditComponent,
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
         path: 'smart-form-field/create',
         component: SmartFormFieldEditComponent,
         resolve: {
             'pagingParams': ResolvePagingParams,
         },
         data: {
             authorities: ['ROLE_USER'],
             pageTitle: 'esenadminwebhrmApp.organization.home.title',
         },
         canActivate: [UserRouteAccessService],
     },
];

