import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
admin={
  name:"",
  password:""
}
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
Enterdetails()
{
  if((this.admin.name=="admin")&&(this.admin.password=="gautham123"))
  {
    this.router.navigate(['/adminhome'])
  }
  else
  {
    alert("Admin not found");
  }
}
}
