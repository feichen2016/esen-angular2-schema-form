import { Routes, RouterModule } from '@angular/router';
import { ModulesComponent } from './modules.component';
import { organizationRoute } from './organization/organization-hrm.route';

export const routes: Routes = [
  {
    path: '',
    component: ModulesComponent,
    children: [  ...organizationRoute],
      // { path: '', redirectTo: 'organization', pathMatch: 'full' },
      // { path: 'home', loadChildren: './home/home.module#HomeModule' },
      // { path: 'dashboard', loadChildren: './dashboard/dashboard.module#MyDashboardModule' },
      // { path: 'employee', loadChildren: './employee/employee-hrm.module#EmployeeAdminModule' },
      // { path: 'competencyModel', loadChildren: './ability/ability-hrm.module#AbilityAdminModule' },
      // { path: 'account', loadChildren: './account/account-hrm.module#AccountAdminModule' },
      // { path: 'competencyModel', loadChildren: './skill/skill-hrm.module#SkillAdminModule' },
      // { path: 'tag', loadChildren: './tag/tag-hrm.module#TagAdminModule' },
      // {
      //   path: 'technologicalTag', loadChildren:
      //   './technological-tag/technological-tag-hrm.module#TechnologicalTagAdminModule'
      // },
      // {
      //   path: 'organization',
      //   loadChildren: './virtual-organization/virtual-organization-hrm.module#VirtualOrganizationAdminModule'
      // },
      // { path: 'organization', loadChildren: './department/department-hrm.module#DepartmentAdminModule' },
      // { path: 'organization', loadChildren: './structure/structure-hrm.module#StructureAdminModule' },
      // { path: 'organization', loadChildren: './place/place-hrm.module#PlaceAdminModule' },
      // { path: 'organization', loadChildren: './position/position-hrm.module#PositionAdminModule' },
      // { path: 'organization', loadChildren: './post/post-hrm.module#PostAdminModule' },
      // { path: 'deploy', loadChildren: './deploy/deploy-hrm.module#DeployAdminModule' },
      // { path: 'tagManagement', loadChildren: './tag/tag-hrm.module#TagAdminModule' },
      // { path: 'tagManagement', loadChildren: './technological-tag/technological-tag-hrm.module#TechnologicalTagAdminModule' },
      // { path: 'task', loadChildren: './process/entry-process-hrm.module#EntryProcessAdminModule' },
      // { path: 'task', loadChildren: './task/task-hrm.module#TaskAdminModule' }
      // {
      //   path: 'zuzhi',
      //   children: zuzhiChildRoutes
      // },
      // {
      //   path: 'competencyModel',

      //   children: competencyChildRoutes
      // },
  },
];
