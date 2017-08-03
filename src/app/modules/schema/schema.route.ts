import { UserRouteAccessService } from '../../shared';
import { SchemaComponent } from './schema.component';
import { Routes } from '@angular/router';
import { smartFormRoutes } from './smart-form/smart-form.route';

export const schemaRoute: Routes = [
  {
    path: 'schema',
    component: SchemaComponent,
    data: {
      authorities: ['ROLE_ADMIN'],
      pageTitle: 'schema.title'
    },
    canActivate: [UserRouteAccessService],
  },
  ...smartFormRoutes,
];
