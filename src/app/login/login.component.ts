import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AccountService]
})
export class LoginComponent {

    loginModel={
      Username:"",
      Password:""
    }

    // constructor(private accountService: AccountService, private router:Router){}

    // ngOnInit(): void{}

    // LoginUser(loginForm:NgForm) {

    //   this.accountService.Login(loginForm.value).subscribe(d=>{
    //     localStorage.setItem("token", d["jwt"]);
    //     this.router.navigateByUrl("")
    //   })
    // }
}
