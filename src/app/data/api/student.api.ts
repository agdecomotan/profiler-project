import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RestApi} from './rest.api';
import {Injectable} from '@angular/core';
import {Student} from '../model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class StudentApi extends RestApi {
    baseUrl = 'student/';
    options = {
        headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        })
    };

    constructor(http: HttpClient) {
        super(http);
    }

    public getStudents(): Observable<Student[]> {
        return this.get<Student[]>(this.baseUrl + 'get.php');
    }

    public getStudent(id: string): Observable<Student> {
        return this.get<Student>(this.baseUrl + 'get.php?id=' + id);
    }

    public addStudent(object: Student): Observable<Student> {
        return this.post(this.baseUrl + 'add.php', object, this.options);
    }

    public updateStudent(object: Student): Observable<null> {
        return this.post(this.baseUrl + 'update.php', object, this.options);
    }

    public deleteStudent(object: Student): Observable<null> {
        return this.post(this.baseUrl + 'delete.php', object, this.options);
    }
}
