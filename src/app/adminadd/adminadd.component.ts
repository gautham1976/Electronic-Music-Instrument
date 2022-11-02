import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-adminadd',
  templateUrl: './adminadd.component.html',
  styleUrls: ['./adminadd.component.css']
})
export class AdminaddComponent implements OnInit {
      dataa={
        iaddname:"",
        iadddetails:"",
        iaddref:""

      }
      constructor(private api:MusicService) { }

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
      iadddata()
      {
        this.api.Iadddata(this.dataa).subscribe((data)=>{
    
        })
        alert("success");
      }
    
    }