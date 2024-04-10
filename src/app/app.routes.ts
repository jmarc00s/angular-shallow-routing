import { Routes } from '@angular/router';
import { routesPaths } from './routes.path';

export const routes: Routes = [
  {
    path: routesPaths.user.new,
    loadComponent: () =>
      import('./ui/views/new-user/new-user.component').then((c) => c.NewUserComponent),
  },
  {
    path: routesPaths.admin.new,
    loadComponent: () =>
      import('./ui/views/admin-user/admin-user.component').then((c) => c.AdminUserComponent),
  },
];
