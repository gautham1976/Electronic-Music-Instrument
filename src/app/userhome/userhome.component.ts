import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  constructor(private api:MusicService) { 
    api.instdetail().subscribe((response=>{
      this.data2=response
    }))
  }

  ngOnInit(): void {
  }
  data2:any=[]
  

}