import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  employees : Employee[];

  public constructor(){
    this.employees = [
      new Employee()
    ];
  }


}
