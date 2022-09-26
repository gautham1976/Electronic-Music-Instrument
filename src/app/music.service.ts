import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { UserhomeComponent } from './userhome/userhome.component';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private http:HttpClient) { }
Signupdata(data:any) {

  return this.http.post<any>('http://localhost:3000/signup',SignupComponent)
}

iadddata(iadddata:any){
  return this.http.post<any>('http://localhost:3000/iadddata',UserhomeComponent)
}

instdetail=()=>
{
  return this.http.get('http://localhost:3000/instdetail')
}
}