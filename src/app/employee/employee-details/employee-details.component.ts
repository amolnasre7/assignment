import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  public id;
  constructor(private route:ActivatedRoute) { }
  

  ngOnInit() {
    let id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.id=id;
  }

}
