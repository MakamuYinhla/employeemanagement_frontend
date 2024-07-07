import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl  = "http://localhost:8080/api/v1/employees"

  constructor(private http: HttpClient) {}

  getEmployeesList(): Observable<Employee[]>{
    console.log(this.http.get<Employee[]>(this.apiUrl))
    return this.http.get<Employee[]>(this.apiUrl);
  }
}
