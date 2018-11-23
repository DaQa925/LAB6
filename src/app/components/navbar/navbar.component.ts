import { Component, OnInit } from '@angular/core';
import  {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  creditals = {
    login: "",
    password: ""
  };
  logged =true;
  logout = false;

  form = new FormGroup({login: new FormControl("",Validators.required), password: new FormControl("",Validators.required)});
  constructor (private router:Router,
               public authService: AuthService,
               public communicationService: CommunicationService){

  }

  ngOnInit() {
  }

}
