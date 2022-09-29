import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { DrumsComponent } from './drums/drums.component';
import { GuitarComponent } from './guitar/guitar.component';
import { BongoComponent } from './bongo/bongo.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminaddComponent } from './adminadd/adminadd.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { AdminuserlistComponent } from './adminuserlist/adminuserlist.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SignupComponent,
    ForgotpassComponent,
    LoginComponent,
    KeyboardComponent,
    DrumsComponent,
    GuitarComponent,
    BongoComponent,
    AboutComponent,
    ContactComponent,
    AdminComponent,
    AdminhomeComponent,
    AdminaddComponent,
    UserhomeComponent,
    AdminuserlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
