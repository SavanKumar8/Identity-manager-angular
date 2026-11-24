import { Injectable, signal } from '@angular/core';

type UserRole = 'Manager' | 'Employee' | 'Auditor';
@Injectable({
  providedIn: 'root',
})
export class RoleService {
  private readonly currentRole = signal<UserRole>('Manager');
  currentUserRole = this.currentRole.asReadonly();

  setRole(role: UserRole): void {
    this.currentRole.set(role);
  }
}
