import { Component, inject } from '@angular/core';
import { ModalComponent } from '../../components/modal/modal.component';
import { Location } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { routesPaths } from '../../../routes.path';

@Component({
  selector: 'selector-name',
  standalone: true,
  imports: [ModalComponent, RouterModule],
  providers: [Location],
  template: `<app-modal title="Select user profile" (onClose)="handleClose()">
    <div class="flex justify-between">
      <a class="btn btn-primary" [routerLink]="['/' + routes.admin.new]"
        >Add Admin</a
      >
      <a class="btn btn-secondary">Add Manager</a>
      <a class="btn btn-accent">Add Guest</a>
    </div>
  </app-modal>`,
})
export class NewUserComponent {
  routes = routesPaths;
  private _location = inject(Location);

  handleClose(): void {
    this._location.back();
  }
}
