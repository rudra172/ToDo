import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
 loginForm=this.fb.group({
    username:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]], //array
    password:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],

  })



  constructor(private router:Router,private fb:FormBuilder,private ds:DataService) { }

  ngOnInit(): void {
  }

  login()
  {

    var uname=this.loginForm.value.username;
    var pswd=this.loginForm.value.password;
    var result =this.ds.login(uname,pswd)
    if(result){
      this.router.navigateByUrl('dashboard')
    }
    else{
      alert('Incorrect Password or Invalid User')
    }

  }
}
