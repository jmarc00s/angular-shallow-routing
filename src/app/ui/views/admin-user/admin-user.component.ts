import { Component, inject } from '@angular/core';
import { ModalComponent } from '../../components/modal/modal.component';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [ModalComponent],
  providers: [Location],
  template: `<app-modal title="Add new admin user" (onClose)="handleClose()"
    >admin user component works!!!</app-modal
  >`,
})
export class AdminUserComponent {
  private _router = inject(Router);

  handleClose(): void {
    this._router.navigate(['/']);
  }
}
