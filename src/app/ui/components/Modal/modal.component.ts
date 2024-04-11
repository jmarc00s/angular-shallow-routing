import { Component, input, output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-modal',
  template: `<div class="modal modal-open">
    <div class="modal-box p-0 flex flex-col">
      <div class="bg-base-300 p-4 flex justify-between items-center">
        <h3 class="font-bold text-xl">{{ title() }}</h3>
        <button class="btn btn-ghost btn-sm" (click)="onClose.emit()">x</button>
      </div>
      <section class="p-8">
        <ng-content></ng-content>
      </section>
    </div>
  </div>`,
})
export class ModalComponent {
  title = input<string>();
  onClose = output();
}
