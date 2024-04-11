import { CommonModule } from '@angular/common';
import { Component, OnInit, input, output } from '@angular/core';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonType = 'submit' | 'button';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  standalone: true,
  template: `
    <button
      class="btn w-full"
      [ngClass]="buttonClasses"
      (click)="emitClick()"
      [type]="type()"
      [disabled]="disabled()"
    >
      <ng-content></ng-content>
    </button>
  `,
})
export class ButtonComponent implements OnInit {
  onClick = output();
  size = input<ButtonSize>('md');
  variant = input<ButtonVariant>('primary');
  type = input<ButtonType>('button');
  disabled = input(false);

  buttonClasses: string[] = [];

  ngOnInit(): void {
    this.defineClasses();
  }

  defineClasses(): void {
    this.buttonClasses.push(`btn-${this.variant()}`);
    this.buttonClasses.push(`btn-${this.size()}`);
  }

  emitClick(): void {
    this.onClick.emit();
  }
}
