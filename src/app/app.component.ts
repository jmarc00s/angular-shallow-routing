import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './application/model';
import { UserService } from './application/services/user.service';
import { routesPaths } from './routes.path';
import { ModalComponent } from './ui/components/modal/modal.component';
import { NavbarComponent } from './ui/components/navbar/navbar.component';
import { UsersTableComponent } from './ui/components/users-table/users-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, ModalComponent, UsersTableComponent],
  providers: [UserService],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  userService = inject(UserService);
  users$!: Observable<User[]>;
  routes = routesPaths;

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }
}
