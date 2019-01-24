import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User.model';
import { Observable, of } from 'rxjs';
import {tap, catchError, map} from 'rxjs/operators';
import { isNull } from 'util';

@Injectable()
export class Services {
  url: string = 'http://localhost:56278/api/users/';

  constructor(private http: HttpClient) { }

  createHeaders() : HttpHeaders {
    let headers: any;
    
    headers = new HttpHeaders({
      'Content-Type': 'application/json;',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    });
    return headers;
  } 
  
  public postObs(data: User): Observable<any> {
    console.log(data);
    const headers = this.createHeaders();
    return this.http.post<any>(this.url + 'insert', data, {headers: headers})
    .pipe(this.responseHandler);
  }

  public getObs() : Observable<any>{

    const headers = this.createHeaders();
		
		return this.http.get<any>(this.url + 'all', { headers: headers })
		.pipe(
			tap(this.responseHandler)
		)
		.pipe(
			catchError(this.handleErrorRefactory('getHeroes', []))
		); 

  }

  private responseHandler(response: any) {
		return response;
  }
  
  private handleErrorRefactory<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.log("HandleErrorFactory");			

			if (error.status === 401 || error.status === 0)  {
				console.log('Error: ', 401);
      }
      
			// TODO: send the error to remote logging infrastructure
			console.log(error);
			// TODO: better job of transforming error for user consumption
			// Let the app keep running by returning an empty result.
			return of(result as T);
		};
	}
}
