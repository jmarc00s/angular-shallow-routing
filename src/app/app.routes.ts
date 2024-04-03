import { Routes } from '@angular/router';
import { routesPaths } from './routes.path';

export const routes: Routes = [
  {
    path: routesPaths.user.new,
    loadComponent: () =>
      import('./ui/components/new-user-modal/new-user-modal.component').then(
        (c) => c.NewUserComponent
      ),
  },
];
