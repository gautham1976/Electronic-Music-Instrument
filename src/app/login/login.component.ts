import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signdata= {

    signusername:"",
    signpassword:""
  }

  constructor(private api:MusicService, private router:Router) { }

  ngOnInit(): void {
  }
  Dlogin() {
    this.api.dlogin(this.signdata).subscribe((data) => {
      if (data.success === true) {
        this.router.navigate(['/userhome'])
      } else {
        alert(data.success)
      }
    })
  }
}