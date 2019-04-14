import {Injectable} from '@angular/core';
import {RestApi} from './rest.api';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import {Profile} from '../model';

@Injectable()
export class ProfileApi extends RestApi {
    baseUrl = 'profile/';
    options = {
        headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        })
    };

    constructor(http: HttpClient) {
        super(http);
    }

    public getProfiles(): Observable<Profile[]> {
        return this.get<Profile[]>(this.baseUrl + 'get.php');
    }

    public getProfile(id: string): Observable<Profile> {
        return this.get<Profile>(this.baseUrl + 'get.php?id=' + id);
    }

    public emailProfile(id: string): Observable<Profile> {
        return this.get<Profile>(this.baseUrl + 'email.php?id=' + id);
    }

    public getProfileByStatus(status: string): Observable<Profile[]> {
        return this.get<Profile[]>(this.baseUrl + 'get.php?status=' + status);
    }

    public getProfileByResult(result: string, finalDate: string): Observable<Profile[]> {
        return this.get<Profile[]>(this.baseUrl + 'get.php?result=' + result + '&finalDate=' + finalDate);
    }

    public addProfile(object: Profile): Observable<Profile> {
        return this.post(this.baseUrl + 'add.php', object, this.options);
    }

    public updateProfile(object: Profile): Observable<null> {
        return this.post(this.baseUrl + 'update.php', object, this.options);
    }

    public deleteProfile(object: Profile): Observable<null> {
        return this.post(this.baseUrl + 'delete.php', object, this.options);
    }
}
