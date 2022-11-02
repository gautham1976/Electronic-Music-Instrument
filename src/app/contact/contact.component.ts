import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  feedbackdata={
    message:""
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
feedbck()
{
  console.log(this.feedbackdata)
  this.api.Feedbck(this.feedbackdata).subscribe((data)=>{

  })
  alert("success");
  this.router.navigate(['/userhome'])
}
}

