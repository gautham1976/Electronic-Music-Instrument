import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  signupdata()
  {
    this.api.Signupdata(this.signdata).subscribe((data)=>{

    })
    alert("success");
    this.router.navigate(['/login'])
  }
  

}
