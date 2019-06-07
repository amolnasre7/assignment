import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
   private _url:string ="assets/data/employeelist.json";

  constructor(private _http:HttpClient) { }

  getEmployee(): Observable<any[]> {
     return this._http.get<any[]>(this._url)
  }
  
  }

