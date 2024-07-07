import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent implements OnInit{
  employees : Employee[] = [];

  public constructor(private emp_serv : EmployeeService){
  }

  employees$: Observable<Employee[]> = this.emp_serv.getEmployeesList();
  ngOnInit(): void {
    this.fetchEmployees();

  }


  fetchEmployees():void{
    this.emp_serv.getEmployeesList().subscribe(
      (data: Employee[]) =>{
        this.employees = data;
        console.log(data)
      },
    )
  }

}
