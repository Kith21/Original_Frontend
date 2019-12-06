import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../register/employee';
import { ProfileserviceService } from './profileservice.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
getData:any;
private gridApi;
    private gridColumnApi;
  constructor(private router: Router, private http: HttpClient, private _httpService : ProfileserviceService ) { 
  console.log("HELLO");
	this._httpService.getSuperuserDetails()
		.subscribe((res : any[])=>{
			console.log(res);

			this.getData = res;
	});}
   id : number;
    name: string;
    dob: string;
    phno: number;
    username :string;
    password : string;
    role :string;

    employee : Employee;
    model =  new Employee('','',0,'','','');

  ngOnInit() {
  }

home1(){
	this.router.navigate(['main-page']);
}

navigate(){
       /*var selectedData = this.gridApi.getSelectedRows();
        //console.log(selectedData);
        //this.id = selectedData[0].emp_no;
        this.model.emp_no = selectedData[0].emp_no;
        this.model.name = selectedData[0].name;
        this.model.dob = selectedData[0].dob;
        this.model.phno = selectedData[0].phno;
        this.model.username = selectedData[0].username;
        this.model.password = selectedData[0].password;

        this.model.emp_role = selectedData[0].emp_role;
        return this.model.emp_no;*/

        this.router.navigate(['/updatepro']);
    }
    }

