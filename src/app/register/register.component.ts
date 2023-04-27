import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../services/account.service';
import {ToastrService} from 'ngx-toastr'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  registerForm:FormGroup;
  constructor(private builder:FormBuilder, private accountService:AccountService, private toastr:ToastrService){
    this.registerForm = this.builder.group(
      {
        "FirstName": new FormControl('',Validators.compose([Validators.required,Validators.minLength(3)])),
        "LastName": new FormControl('',Validators.compose([Validators.required,Validators.minLength(3)])),
        "EmailId": new FormControl('',Validators.compose([Validators.required,Validators.email]) ),
        "Password": new FormControl('',Validators.compose([Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?$])[A-Za-z\d$@$!%*?&].{8,}')])),
        "ConfirmPassword": new FormControl('',[Validators.required]),
      }
    );
  }

  ngOnInit(): void { }

  register() {
    if (this.registerForm.valid) {
      this.accountService.SignUp(this.registerForm.value).subscribe(d => {
        alert(d)
        this.registerForm.reset();
      })
    }
    else {
      this.toastr.warning('Try again! Incorrect format.')

    }
  }


}
