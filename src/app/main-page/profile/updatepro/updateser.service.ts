import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Employee } from '../../register/employee';
@Injectable({
  providedIn: 'root'
})
export class UpdateserService {

  constructor(private http: HttpClient) { }
  getUpdateDetails() {
  	return this.http.get('http://localhost:8080/MyProject/superuser');
  }

  updateEmployee(emp_no : number,employee: Object) {
  	console.log(emp_no);
  	console.log(employee);
    return this.http.put<Employee>('http://localhost:8080/MyProject/put/employee/'+ emp_no, employee);
  }
}
