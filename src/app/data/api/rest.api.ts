import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';

export class RestApi {

  public static API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  protected get<T>(apiUrl: string, options?: {}): Observable<T> {
    return this.http.get<T>(RestApi.API_URL + apiUrl, options);
  }

  protected getUrl<T>(apiUrl: string, options?: {}): Observable<T> {
    return this.http.get<T>(apiUrl, options);
  }

  protected delete(apiUrl: string, options?: {}): Observable<null> {
    return this.http.delete<null>(RestApi.API_URL + apiUrl, options);
  }

  public post(apiUrl: string, data: any, options?: {}): Observable<null> {
    return this.http.post<null>(RestApi.API_URL + apiUrl, data, options);
  }

  public put(apiUrl: string, data: any, options?: {}): Observable<null> {
    return this.http.put<null>(RestApi.API_URL + apiUrl, data, options);
  }
}
