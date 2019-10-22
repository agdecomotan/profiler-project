import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BaseService {
    jsonOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    apiURL = 'https://track-profiler-api.herokuapp.com/';

    constructor(private http: HttpClient, private router: Router) {}

    // Student
    getStudents(value?): Observable<any> {
        const url = this.apiURL + 'student/get.php';
        if (value) {
            const params = new HttpParams()
                .set('id', value);
            return this.http.get<any>(url, {params});
        } else {
            return this.http.get<any>(url);
        }
    }

    updateStudent(value) {
        const url = this.apiURL + 'student/update.php';
        return this.http.post(url, value);
    }

    addStudent(value) {
        const url = this.apiURL + 'student/add.php';
        return this.http.post(url, value, this.jsonOptions);
    }

    deleteProduct(value) {
        const url = this.apiURL + 'api/product/delete.php';
        return this.http.post(url, value);
    }

    getProducts(value?): Observable<any> {
        return null;
    }
}
