import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent implements OnInit {

  constructor(private api:MusicService) { 
    api.view2().subscribe(
      (Response)=>{
        this.data4=Response
      }
    )
  }

  ngOnInit(): void {
  }
  data4:any=[
    
  ]

}