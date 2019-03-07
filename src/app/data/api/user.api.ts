import {Injectable} from '@angular/core';
import {RestApi} from './rest.api';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import {User} from '../model';

@Injectable()
export class UserApi extends RestApi {
    baseUrl = 'user/';
    options = {
        headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        })
    };

    constructor(http: HttpClient) {
        super(http);
    }

    public getUsers(): Observable<User[]> {
        return this.get<User[]>(this.baseUrl + 'get.php');
    }

    public getUser(id: string): Observable<User> {
        return this.get<User>(this.baseUrl + 'get.php?id=' + id);
    }

    public addUser(object: User): Observable<User> {
        return this.post(this.baseUrl + 'add.php', object, this.options);
    }

    public updateUser(object: User): Observable<null> {
        return this.post(this.baseUrl + 'update.php', object, this.options);
    }

    public deleteUser(object: User): Observable<null> {
        return this.post(this.baseUrl + 'delete.php', object, this.options);
    }
}
