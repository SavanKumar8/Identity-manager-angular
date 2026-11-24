import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RoleService } from '../../core/service/role.service';
@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  selector: 'app-shell',
  //styleUrl: '',
  templateUrl: './shell.html',
})
export class Shell {
  userRoleService = inject(RoleService);
  role = this.userRoleService.currentUserRole;
  changeUserRole(role: any) {
    this.userRoleService.setRole(role);
  }
}
