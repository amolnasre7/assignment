import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'employeelist',
    pathMatch:'full'
  },

  {
    path:'employeelist',
    component:EmployeeListComponent
  },
  {
    path:'createEmployee',
  component:CreateEmployeeComponent
},
{
  path:'employees/:id',
  component: EmployeeDetailsComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
