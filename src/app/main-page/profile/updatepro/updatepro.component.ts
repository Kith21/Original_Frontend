import { Component, OnInit } from '@angular/core';
import {AllCommunityModules} from '@ag-grid-community/all-modules';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from '@ag-grid-community/angular';
import { Employee } from '../../register/employee';
import { Router } from '@angular/router';
import { UpdateserService } from './updateser.service';
@Component({
  selector: 'app-updatepro',
  templateUrl: './updatepro.component.html',
  styleUrls: ['./updatepro.component.css']
})
export class UpdateproComponent implements OnInit {
	getData :any[];

private gridApi;
    private gridColumnApi;

  constructor(private router: Router, private http: HttpClient, private __httpService : UpdateserService ) { }
employee : Employee;

    model =  new Employee('','',0,'','','');
  ngOnInit() {
    this.__httpService.getUpdateDetails()
    .subscribe((res : any[])=>{
      console.log(res);

      this.getData = res;
    
        this.model.emp_no = this.getData[0].emp_no;
        console.log(this.model.emp_no);
        this.model.name = this.getData[0].name;
        this.model.dob = this.getData[0].dob;
        this.model.phno = this.getData[0].phno;
        this.model.username = this.getData[0].username;
        this.model.password = this.getData[0].password;

        this.model.emp_role = this.getData[0].emp_role;
        return this.model.emp_no;
      
  
});
  }
/*updRow(){

	this.employee = new Employee(this.model.name,this.model.dob,this.model.phno,this.model.username,this.model.password,this.model.emp_role);
        this.employee.emp_no = this.model.emp_no;
        //console.log(this.employee);
        //console.log(id);
        this.__httpService.updateEmployee(this.model.emp_no,this.employee).subscribe(data => console.log(data));
           
    
}
}*/
}