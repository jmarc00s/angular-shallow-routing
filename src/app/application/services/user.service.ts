import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model';

@Injectable()
export class UserService {
  private _baseUrl = 'http://localhost:3000/users';

  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this._baseUrl);
  }

  getById(id: User['id']): Observable<User> {
    return this.httpClient.get<User>(`${this._baseUrl}/${id}`);
  }

  addUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this._baseUrl, user);
  }
}
