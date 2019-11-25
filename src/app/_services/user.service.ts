import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../_models';


@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    base_url = 'http://localhost:8080/api';

    getAll() {
        return this.http.get<User[]>(this.base_url + '/employees');
    }

    getById(id: string) {
        return this.http.get(this.base_url + '/employees/get-emp/' + id);
    }

    register(user: User) {
        return this.http.post(this.base_url + '/employees', user);
    }

    update(user: User) {
        return this.http.patch(this.base_url + '/employees', user);
    }

    delete(id: number) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.delete(this.base_url + '/employees/delete-emp/' + id,  httpOptions);
    }
}