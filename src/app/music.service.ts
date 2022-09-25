import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignupComponent } from './signup/signup.component';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private http:HttpClient) { }
Signupdata(data:any) {

  return this.http.post<any>('http://localhost:3000/signup',SignupComponent)
}
}
