import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-navbar',
  template: `<div class="navbar px-8 bg-base-300 justify-between">
    <h1 class="font-semibold text-lg">Angular shallow routing</h1>
  </div>`,
})
export class NavbarComponent {}
