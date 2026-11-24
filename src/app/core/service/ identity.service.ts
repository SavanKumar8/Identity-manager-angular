import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '../tokens/api-url.token';

export interface IdentityJSON {
  id: string;
  name: string;
  department: string;
  manager: string;
  status: string;
  accessItems: number;
  risk: string;
}

@Injectable({
  providedIn: 'root',
})
export class IdentityService {
  private http = inject(HttpClient);
  private apiUrl = inject(API_URL);

  getIdenities() {
    return this.http.get(`${this.apiUrl}/identities.json`);
  }
}
