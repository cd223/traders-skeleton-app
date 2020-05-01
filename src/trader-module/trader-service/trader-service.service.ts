import { Injectable } from '@angular/core';
import { Trader } from '../model/trader';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class TraderServiceService {

  traders: Trader[]
  baseUrl: string = "http://localhost:3000"

  constructor(private http: HttpClient) { 
    this.traders = []
  }

  register(trader: Trader): any {
    return this.http.post(this.baseUrl + '/traders', {
      "name": trader.name,
      "location": trader.location,
      "deskNumber": trader.deskNumber,
      "currency": trader.currency,
      "valueTraded": trader.valueTraded
    }).pipe(retry(1), catchError(this.errorHandl))
  }

  getTraders(): Observable<Trader[]> {
    return this.http.get<Trader[]>(this.baseUrl + '/traders')
      .pipe(retry(1), catchError(this.errorHandl))
  }

  errorHandl (error) {
    let errorMessage = ''
    if( error.error instanceof ErrorEvent ) {
      errorMessage = error.error.message // client side error
    } else {
      errorMessage = `Error Code: ${error.status} \n Message: ${error.message}` // server side error 
    }
    console.log(errorMessage)
    return throwError(errorMessage)
  }
    
}
