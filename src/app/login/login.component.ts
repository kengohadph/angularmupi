import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators, NgForm, FormsModule } from '@angular/forms';
import { TokenInterceptor } from '../interceptors/token.interceptor';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MaterialModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AccountService, TokenInterceptor]
})
export class LoginComponent {

    loginModel={
      Username:"",
      Password:""
    }


    constructor(private accountService: AccountService, private router:Router){}

    ngOnInit(): void{}

    Login(logindata:any) {

      if(logindata.valid){
        
      this.accountService.Login(logindata.value).subscribe(d=>{
        localStorage.setItem("token", d["jwt"]);
        this.router.navigateByUrl("dashboard")
        })
      }

    }
}
