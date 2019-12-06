import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginserService {

  constructor(private http:HttpClient) { }
  
  getloginDetails() {
  	return this.http.get('http://localhost:8080/MyProject/superuser');
  }
}
