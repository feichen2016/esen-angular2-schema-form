import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { CompanyHrmComponent } from './company-hrm.component';
import { CompanyHrmDetailComponent } from './company-hrm-detail.component';
import { CompanyHrmEditComponent } from './company-hrm-edit.component';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

@Injectable()
export class CompanyHrmResolvePagingParams implements Resolve<any> {

  constructor(private paginationUtil: JhiPaginationUtil) { }

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

export const companyRoute: Routes = [
  {
    path: 'hrm-Company-list',
    component: CompanyHrmComponent,
    resolve: {
      'pagingParams': CompanyHrmResolvePagingParams,
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'esenadminwebhrmApp.organization.home.title',
    },
    canActivate: [UserRouteAccessService],
  }, {
    path: 'hrm-company/:id',
    component: CompanyHrmDetailComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'esenadminwebhrmApp.company.home.title',
    },
    canActivate: [UserRouteAccessService],
  }, {
    path: 'hrm-company-new',
    component: CompanyHrmEditComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'esenadminwebhrmApp.company.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'hrm-company-edit/:id',
    component: CompanyHrmEditComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'esenadminwebhrmApp.company.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];

// export const routing: ModuleWithProviders = RouterModule.forChild(companyRoute);
