import {Injectable} from '@angular/core';
import {RestApi} from './rest.api';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import {Grade} from '../model';

@Injectable()
export class GradeApi extends RestApi {
    baseUrl = 'grade/';
    options = {
        headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        })
    };

    constructor(http: HttpClient) {
        super(http);
    }

    public getGrades(): Observable<Grade[]> {
        return this.get<Grade[]>(this.baseUrl + 'get.php');
    }

    public getGrade(id: string): Observable<Grade[]> {
        return this.get<Grade[]>(this.baseUrl + 'get.php?id=' + id);
    }

    public getSDGrade(id: string): Observable<Grade[]> {
        return this.get<Grade[]>(this.baseUrl + 'get.php?specialization=SD&id=' + id);
    }


    public addGrade(object: Grade): Observable<Grade> {
        return this.post(this.baseUrl + 'add.php', object, this.options);
    }

    public updateGrade(object: Grade): Observable<null> {
        return this.post(this.baseUrl + 'update.php', object, this.options);
    }

    public deleteGrade(object: Grade): Observable<null> {
        return this.post(this.baseUrl + 'delete.php', object, this.options);
    }
}
