import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://127.0.0.1:8000/api/auth/login';

  constructor(private http: HttpClient) { }

  public get() {
    return this.http.get(this.apiUrl);
  }

   public post(data: string) {
    return this.http.post(this.apiUrl, data).pipe(map(response => {
      return response;
    }))
  }

  public put(id: number, data: string) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, data).pipe(
      map(response => {
        return response;
      })
    );
  }

  public delete(id: number) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url).pipe(
      map(response => {
        return response;
      })
    );
  }
}
