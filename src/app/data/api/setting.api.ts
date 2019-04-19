import {Injectable} from '@angular/core';
import {RestApi} from './rest.api';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import {Setting} from '../model';

@Injectable()
export class SettingApi extends RestApi {
    baseUrl = 'setting/';
    options = {
        headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        })
    };

    constructor(http: HttpClient) {
        super(http);
    }

    public getSettings(): Observable<Setting[]> {
        return this.get<Setting[]>(this.baseUrl + 'get.php');
    }

    public getSetting(name: string): Observable<Setting[]> {
        return this.get<Setting[]>(this.baseUrl + 'get.php?name=' + name);
    }

    public addSetting(object: Setting): Observable<Setting> {
        return this.post(this.baseUrl + 'add.php', object, this.options);
    }

    public updateSetting(object: Setting): Observable<null> {
        return this.post(this.baseUrl + 'update.php', object, this.options);
    }

    public deleteSetting(object: Setting): Observable<null> {
        return this.post(this.baseUrl + 'delete.php', object, this.options);
    }
}
