import { Component, OnInit, input } from '@angular/core';
import { User } from '../../../application/model';
import { RoleTagComponent } from '../role-tag/role-tag.component';

@Component({
  selector: 'app-users-table',
  standalone: true,
  imports: [RoleTagComponent],
  template: `<table class="table table-zebra ">
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
      <tr>
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td><app-role-tag [role]="user.role" /></td>
      </tr>
      }
    </tbody>
  </table>`,
})
export class UsersTableComponent implements OnInit {
  users = input<User[]>([]);

  ngOnInit() {}
}
