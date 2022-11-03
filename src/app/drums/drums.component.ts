import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drums',
  templateUrl: './drums.component.html',
  styleUrls: ['./drums.component.css']
})
export class DrumsComponent implements OnInit {
  signdata={
    signusername:"",
    signemail:""
  }

  constructor() { }

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

}
