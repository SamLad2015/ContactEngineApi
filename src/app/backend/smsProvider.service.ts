import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Country} from './country';
import {SmsProvider} from "./smsProvider";
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class SmsProviderService {
  // Base url
  baseurl = environment.api;

  constructor(private http: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': environment.auth_token
    })
  }

  // GET
  GetAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.baseurl + 'countries' , this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      )
  }

  // GET
  GetAllSmsProviders(): Observable<SmsProvider[]> {
    return this.http.get<SmsProvider[]>(this.baseurl , this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      )
  }

  // POST
  CreateSmsProvider(data): Observable<any> {
    return this.http.post<SmsProvider>(this.baseurl , JSON.stringify(data), this.httpOptions);
  }

  // Error handling
  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
