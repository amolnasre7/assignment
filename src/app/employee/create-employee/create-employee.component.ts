import { Component, OnInit, ViewChild, ViewChildren, } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
@ViewChildren ('employeeForm') public createEmployeeForm: NgForm;
  

  constructor() { }

  ngOnInit() {
  }

}