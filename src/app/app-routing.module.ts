import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { KeyboardComponent } from './keyboard/keyboard.component';


const routes: Routes = [{path:'signup',component:SignupComponent},
 {path:'forgotpass',component:ForgotpassComponent},
 {path:'',component:HomeComponent},
 {path:'forgotpass',component:ForgotpassComponent},
 {path:'login',component:LoginComponent},
{path:'about',component:AboutComponent},
{path:'contact',component:ContactComponent},
{path:'keyboard',component:KeyboardComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
