import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BaseService {
    apiURL = 'https://callousphotography.000webhostapp.com/api/';

    constructor(private http: HttpClient, private router: Router) {}

    // Product
    getProducts(value?): Observable<any> {
        const url = this.apiURL + 'api/product/get.php';
        if (value) {
            const params = new HttpParams()
                .set('category', value);
            return this.http.get<any>(url, {params});
        } else {
            return this.http.get<any>(url);
        }
    }
}
