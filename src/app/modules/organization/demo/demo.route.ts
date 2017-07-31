import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { DemoListComponent } from './demo-list.component';
import { DemoDetailComponent } from './demo-detail.component';
import { DemoEditComponent } from './demo-edit.component';

@Injectable()
export class DemoResolvePagingParams implements Resolve<any> {

  constructor(private paginationUtil: JhiPaginationUtil) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const page = route.queryParams['page'] ? route.queryParams['page'] : '1';
      const sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
      return {
          page: this.paginationUtil.parsePage(page),
          predicate: this.paginationUtil.parsePredicate(sort),
          ascending: this.paginationUtil.parseAscending(sort),
    };
  }
}

export const demoRoute: Routes = [
  /*{
    path: 'demo-edit',
    component: DemoComponent,
    resolve: {
      'pagingParams': DemoResolvePagingParams,
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'esenadminwebhrmApp.organization.home.title',
    },
    canActivate: [UserRouteAccessService],
  },*/
    {
    path: 'demo-list',
    component: DemoListComponent,
    resolve: {
      'pagingParams': DemoResolvePagingParams,
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'esenadminwebhrmApp.organization.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
    {
        path: 'detail/:id',
        component: DemoDetailComponent,
        resolve: {
            'pagingParams': DemoResolvePagingParams,
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'esenadminwebhrmApp.organization.home.title',
        },
        canActivate: [UserRouteAccessService],
    },
    {
        path: 'edit/:id',
        component: DemoEditComponent,
        resolve: {
            'pagingParams': DemoResolvePagingParams,
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'esenadminwebhrmApp.organization.home.title',
        },
        canActivate: [UserRouteAccessService],
    },
];

