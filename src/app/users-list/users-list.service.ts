import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, zip } from 'rxjs';
import { IUser, IUserResponse, IUsersResponse } from './types';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UsersListService {
    apiUrl = 'https://reqres.in/api/';

    constructor(private http: HttpClient) {}

    getUsers(): Observable<IUser[]> {
        // sum up to 12 rows
        const page1Rq = this.http.get<IUsersResponse>(`${this.apiUrl}users?page=1`);
        const page2Rq = this.http.get<IUsersResponse>(`${this.apiUrl}users?page=2`);

        return zip(page1Rq, page2Rq).pipe(
            map(response => {
                return response[0].data.concat(response[1].data);
            })
        );
    }

    getUserDetails(id: string): Observable<IUserResponse> {
        return this.http.get<IUserResponse>(`${this.apiUrl}users/${id}`);
    }
}
