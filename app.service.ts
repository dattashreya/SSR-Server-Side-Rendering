import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  // api url to get the data
  readonly apiUrl: any = 'https://jsonplaceholder.typicode.com/users';
  // injecting http client
  constructor(private http: HttpClient) {}
  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
