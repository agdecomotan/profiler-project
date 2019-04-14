import {Injectable} from '@angular/core';
import {RestApi} from './rest.api';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import {Course} from '../model';

@Injectable()
export class CourseApi extends RestApi {
    baseUrl = 'course/';
    options = {
        headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        })
    };

    constructor(http: HttpClient) {
        super(http);
    }

    public getCourses(): Observable<Course[]> {
        return this.get<Course[]>(this.baseUrl + 'get.php');
    }

    public getCourse(id: string): Observable<Course> {
        return this.get<Course>(this.baseUrl + 'get.php?id=' + id);
    }

    public getActiveCourse(): Observable<Course[]> {
        return this.get<Course[]>(this.baseUrl + 'get.php?status=true');
    }

    public addCourse(object: Course): Observable<Course> {
        return this.post(this.baseUrl + 'add.php', object, this.options);
    }

    public updateCourse(object: Course): Observable<null> {
        return this.post(this.baseUrl + 'update.php', object, this.options);
    }

    public deleteCourse(object: Course): Observable<null> {
        return this.post(this.baseUrl + 'delete.php', object, this.options);
    }
}
