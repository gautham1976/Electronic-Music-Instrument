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

      ngOnInit(): void {
      }
      iadddata()
      {
        this.api.Iadddata(this.dataa).subscribe((data)=>{
    
        })
        alert("success");
      }
    
    }