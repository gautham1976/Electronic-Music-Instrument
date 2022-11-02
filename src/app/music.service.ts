import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminaddComponent } from './adminadd/adminadd.component';
import { SignupComponent } from './signup/signup.component';
import { UserhomeComponent } from './userhome/userhome.component';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private http:HttpClient) { }
Signupdata(data:any) {

  return this.http.post<any>('http://localhost:3000/signup',data)
}

Iadddata(dataa:any){
  return this.http.post<any>('http://localhost:3000/adminadd',dataa)
}

instdetail=()=>
{
  return this.http.get('http://localhost:3000/instdetail')
}

dlogin(data3:any){
  return this.http.post<any>('http://localhost:3000/login',data3)
}
view=()=>{
  return this.http.get('http://localhost:3000/adminuserlist')
}

Feedbck(feedbackdata:any){
  return this.http.post<any>('http://localhost:3000/contact',feedbackdata)
}

view2=()=>{
  return this.http.get('http://localhost:3000/forgotpass')
}
}
