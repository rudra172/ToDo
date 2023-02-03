import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    uname='';
    pswd='';
    pswd2='';
   //register model
   registerForm=this.fb.group({
    userName:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]], //array
    password:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
    ConfirmPassword:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]

  })
  
userName: any;
password: any;
ConfirmPassword: any;
users:any;


  constructor(private router:Router,private fb:FormBuilder,private ds:DataService,) { }

  ngOnInit(): void {
  }
    
    register(){
      var uname=this.registerForm.value.userName;
      var pswd=this.registerForm.value.password;
      var Cpswd=this.registerForm.value.ConfirmPassword;
      const result =this.ds.register(uname,pswd,Cpswd);
      if(this.registerForm.valid){
        if(result){
          this.router.navigateByUrl('');
        }else{
          alert('User already registered');
        }
      }else{
        alert('Invalid Form')
      }
    }
  
}
