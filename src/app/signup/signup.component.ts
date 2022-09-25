import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signdata={
    signusername:"",
    signemail:"",
    signphone:"",
    signpassword:"",
    signconfirmpass:""
  }

  constructor(private api:MusicService) { }

  ngOnInit(): void {
  }
  signupdata()
  {
    this.api.Signupdata(this.signdata).subscribe((data)=>{

    })
    alert("success");
  }

}
