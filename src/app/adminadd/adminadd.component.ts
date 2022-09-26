import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-adminadd',
  templateUrl: './adminadd.component.html',
  styleUrls: ['./adminadd.component.css']
})
export class AdminaddComponent implements OnInit {
      iadddata={
        iaddname:"",
        iadddetails:"",
        iaddref:""

      }
      constructor(private api:MusicService) { }

      ngOnInit(): void {
      }
      adddata()
      {
        this.api.iadddata(this.adddata).subscribe((data)=>{
    
        })
        alert("success");
      }
    
    }