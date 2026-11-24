import { IdentityService } from './core/service/ identity.service';
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Shell } from './layout/shell/shell.component';

@Component({
  imports: [RouterOutlet, Shell],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  identityService = inject(IdentityService);
  protected readonly title = signal('identity-manager-angular');
  constructor() {
    this.identityService.getIdenities();
  }
}
