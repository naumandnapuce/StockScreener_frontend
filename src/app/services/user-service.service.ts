import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import {UserModel} from '../models/user-model';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<UserModel | null>;
    public currentUser: Observable<UserModel | null>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<UserModel | null>(JSON.parse((localStorage.getItem("currentUser"))||'{}'))
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): UserModel | null {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(`https://nscreeener20210409142600.azurewebsites.net/api/Login`, { username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
  }
}
