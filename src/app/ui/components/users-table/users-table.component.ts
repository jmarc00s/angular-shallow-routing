import { Component, inject, input } from '@angular/core';
import { User } from '../../../application/model';
import { RoleTagComponent } from '../role-tag/role-tag.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-table',
  standalone: true,
  imports: [RoleTagComponent],
  template: `<table class="table">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      @for (user of users(); track user.id) {
        <tr class="cursor-pointer hover:bg-base-300" (click)="handleRowClick(user)">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td><app-role-tag [role]="user.role" /></td>
        </tr>
      }
    </tbody>
  </table>`,
})
export class UsersTableComponent {
  private _router = inject(Router);
  users = input<User[]>([]);

  handleRowClick(user: User): void {
    this._router.navigate(['/', 'admin', user.id, 'edit']);
  }
}
