import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

 employees:any[];

  constructor(private _employeeService: EmployeeService,
              private _router: Router) { }

  ngOnInit() {
    this._employeeService.getEmployee().subscribe(data=>this.employees=data);
  }
  onSelect(emp){
 this._router.navigate(['/employees',emp.id]);
  }

}
