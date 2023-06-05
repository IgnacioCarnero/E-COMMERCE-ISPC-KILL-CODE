import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://127.0.0.1:8000/api/auth/login';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const body = {email, password};
    return this.http.post(this.apiUrl, body)
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users/`);
  }

  createUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/users/`, user);
  }
  updateUser(id: number, user: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/users/${id}/`, user);
}

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/users/${id}/`);
}

}
