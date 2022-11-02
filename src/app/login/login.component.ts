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

  ngOnInit(): void {(() => {
    'use strict'
  
    const forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms).forEach(form => {
      form.addEventListener('submit',function(event:any){
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
  }
  Dlogin() {
    console.log(this.signdata)
    this.api.dlogin(this.signdata).subscribe((signdata) => {
      console.log(signdata)
      if (signdata.success === true) {
        this.router.navigate(['/userhome'])
      } else {
        alert(signdata.success)
      }
    })
  }
}