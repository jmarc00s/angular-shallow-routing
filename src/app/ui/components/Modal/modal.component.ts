import { Component, OnInit, input, output, signal } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-modal',
  template: `<div class="modal modal-open">
    <div class="modal-box">
      <h3 class="font-bold text-lg">{{ title() }}</h3>
      <ng-content name="modal-body"></ng-content>
      <div class="modal-action">
        <button class="btn" (click)="onClose.emit()">Close</button>
      </div>
    </div>
  </div>`,
})
export class ModalComponent {
  title = input<string>();
  onClose = output();
}
