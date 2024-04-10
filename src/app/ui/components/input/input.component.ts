import { CommonModule } from '@angular/common';
import { Component, OnInit, Signal, computed, effect, input, signal } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-input',
  template: `<ng-container>
    <label class="form-control w-full">
      <div class="label">
        <span class="label-text" [ngClass]="{ 'text-error': hasError() }"
          >{{ label() }}
          <span *ngIf="required()" class="text-error">*</span>
        </span>
      </div>
      <input class="input input-bordered w-full" [ngClass]="{ 'input-error': hasError() }" />
      @if (errors()?.['required']) {
        <div class="label">
          <span class="label-text-alt text-error">Required field</span>
        </div>
      }
      @if (errors()?.['email']) {
        <div class="label">
          <span class="label-text-alt text-error">Invalid email</span>
        </div>
      }
    </label>
  </ng-container>`,
})
export class InputComponent {
  required = input<boolean>(false);
  label = input<string>('');
  errors = input<ValidationErrors | null>(null);
  hasError = computed(() => !!this.errors());
}
