import { isNgContainer } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-form-component',
  templateUrl: './user-form-component.component.html',
  styleUrls: ['./user-form-component.component.css']
})
export class UserFormComponentComponent implements OnInit {
  userForm!: FormGroup;
  constructor(){}



ngOnInit(){
  this.userForm = new FormGroup({
    fName: new FormControl(''),
    lName: new FormControl(''),
    mName: new FormControl(''),
    hasMiddleName: new FormControl(false)
  });
}

}
