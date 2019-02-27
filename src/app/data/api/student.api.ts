import {HttpClient} from '@angular/common/http';
import {RestApi} from './rest.api';
import {Injectable} from '@angular/core';
import {Student} from '../model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DashboardApi extends RestApi {
    baseUrl = 'student/';
    constructor(http: HttpClient) {
        super(http);
    }

    public getStudents(): Observable<Student[]> {
        return this.get<Student[]>(this.baseUrl);
    }

    public getStudent(id: string): Observable<Student> {
        return this.get<Student>(this.baseUrl + id);
    }

    public addStudent(object: Student): Observable<Student> {
        return this.post(this.baseUrl, object);
    }

    public updateStudent(object: Student): Observable<null> {
        return this.put(this.baseUrl + object.id, object);
    }

    public deleteStudent(object: Student): Observable<null> {
        return this.delete(this.baseUrl + object.id);
    }
}
