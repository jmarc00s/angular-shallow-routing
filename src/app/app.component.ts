import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './ui/components/modal/modal.component';
import { NavbarComponent } from './ui/components/navbar/navbar.component';
import { Role, User } from './application/model';
import { UsersTableComponent } from './ui/components/users-table/users-table.component';
import { Observable } from 'rxjs';
import { UserService } from './application/services/user.service';

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
  providers: [UserService],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  userService = inject(UserService);
  users$!: Observable<User[]>;

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }
}
