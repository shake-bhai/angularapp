import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {OnlineBookingRequest} from './onlineBookingDetail';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private http:HttpClient) { }
  
  

 public submitUserData(onlineBookinDetail:object): Observable<object>  {
    return this.http.post('http://localhost:8082/api/booking/online/form', onlineBookinDetail);
    

}

}
