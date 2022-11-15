import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Routes } from '@angular/router';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: any;
 

  constructor(private router: Routes, private ds:  DataserviceService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  register() {

    this.router.navigateByUrl('information')
  }
}

