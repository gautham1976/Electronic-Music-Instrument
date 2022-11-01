import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { AdminComponent } from './admin/admin.component';
import { AdminaddComponent } from './adminadd/adminadd.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminuserlistComponent } from './adminuserlist/adminuserlist.component';
import { BongoComponent } from './bongo/bongo.component';



const routes: Routes = [{path:'signup',component:SignupComponent},
 {path:'forgotpass',component:ForgotpassComponent},
 {path:'',component:HomeComponent},
 {path:'forgotpass',component:ForgotpassComponent},
 {path:'login',component:LoginComponent},
{path:'about',component:AboutComponent},
{path:'contact',component:ContactComponent},
{path:'keyboard',component:KeyboardComponent},
{path:'admin',component:AdminComponent},
{path:'adminadd',component:AdminaddComponent},
{path:'userhome',component:UserhomeComponent},
{path:'adminhome',component:AdminhomeComponent},
{path:'adminuserlist',component:AdminuserlistComponent},
{path:'bongo',component:BongoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
