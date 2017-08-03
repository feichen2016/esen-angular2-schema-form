import { Routes } from '@angular/router';
import { ModulesComponent } from './modules.component';
import { organizationRoute } from './organization/organization-hrm.route';
import { schemaRoute } from './schema/schema.route';

export const routes: Routes = [
  {
    path: '',
    component: ModulesComponent,
    children: [
      ...organizationRoute,
      ...schemaRoute,
    ],
  },
];
