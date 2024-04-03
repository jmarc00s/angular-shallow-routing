import { Component, Input, OnInit, computed, input } from '@angular/core';
import { Role } from '../../../application/model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-role-tag',
  standalone: true,
  imports: [CommonModule],
  template: `<span
    class="badge font-semibold"
    [ngClass]="this.roleStyles[this.role]"
    >{{ role }}</span
  >`,
})
export class RoleTagComponent {
  @Input() role!: Role;

  roleStyles = {
    [Role.Admin]: 'badge-primary',
    [Role.Guest]: 'badge-secondary',
    [Role.Manager]: 'badge-accent',
  };
}
