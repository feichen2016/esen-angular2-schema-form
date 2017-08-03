import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';
import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';
import { OrganizationHrmComponent } from './organization-hrm.component';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { companyRoute } from './company/company-hrm.route';
import {demoRoute} from './demo/demo.route';

@Injectable()
export class OrganizationHrmResolvePagingParams implements Resolve<any> {

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

export const organizationRoute: Routes = [
  {
    path: 'organization',
    component: OrganizationHrmComponent,
    data: {
      authorities: ['ROLE_ADMIN'],
      pageTitle: 'organization.title'
    },
    children: [  ...demoRoute, ...companyRoute],
    canActivate: [UserRouteAccessService],
  },
  ...demoRoute,
  ...companyRoute,
];

// export const routing: ModuleWithProviders = RouterModule.forChild(organizationRoute);
