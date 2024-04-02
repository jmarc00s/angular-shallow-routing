import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './ui/components/Navbar/navbar.component';
import { ModalComponent } from './ui/components/Modal/modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, ModalComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-shallow-routing';
  isModalOpen = signal<boolean>(false);
}
