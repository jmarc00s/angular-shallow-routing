import { Component, OnInit, input, output, signal } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-modal',
  template: `<div class="modal modal-open">
    <div class="modal-box p-0 flex flex-col gap-4">
      <div class="bg-base-300 p-4">
        <h3 class="font-bold text-xl">{{ title() }}</h3>
      </div>
      <section class="p-8">
        <ng-content name="modal-body"></ng-content>
      </section>
      <div class="modal-action p-4">
        <button class="btn" (click)="onClose.emit()">Close</button>
      </div>
    </div>
  </div>`,
})
export class ModalComponent {
  title = input<string>();
  onClose = output();
}
