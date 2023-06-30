import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http: HttpClient) { }

  register(formData: any): Observable<any> {
    return this.http.post('http://localhost:8000/api/auth/register/', formData);
  }
}
