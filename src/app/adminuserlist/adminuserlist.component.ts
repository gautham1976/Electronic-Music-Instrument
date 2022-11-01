import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';


@Component({
  selector: 'app-adminuserlist',
  templateUrl: './adminuserlist.component.html',
  styleUrls: ['./adminuserlist.component.css']
})
export class AdminuserlistComponent implements OnInit {

  constructor(private api:MusicService) { 
    api.view().subscribe(
      (Response)=>{
        this.data=Response
      }
    )
  }

  ngOnInit(): void {
  }
  data:any=[
    
  ]

}
