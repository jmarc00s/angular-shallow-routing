import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './ui/components/modal/modal.component';
import { NavbarComponent } from './ui/components/navbar/navbar.component';
import { Role, User } from './application/model';
import { UsersTableComponent } from './ui/components/users-table/users-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    ModalComponent,
    UsersTableComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  users: User[] = [
    {
      id: '2456',
      name: 'UserName',
      email: 'mail@mail.com',
      role: Role.Admin,
    },
  ];
}
