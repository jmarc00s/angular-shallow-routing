import { Component, inject } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { Location } from '@angular/common';

@Component({
  selector: 'selector-name',
  standalone: true,
  imports: [ModalComponent],
  providers: [Location],
  template: `<app-modal title="Add new user modal" (onClose)="handleClose()">
    <div>Hello from add common user modal</div>
  </app-modal>`,
})
export class NewUserComponent {
  private _location = inject(Location);

  handleClose(): void {
    this._location.back();
  }
}
