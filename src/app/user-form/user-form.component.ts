import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit{
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(){
    // this.userForm = new FormGroup({
    //   fName: new FormControl('', Validators.required),
    //   lName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    //   mName: new FormControl('', Validators.required),
    //   hasMiddleName: new FormControl(false)
      
    // });

    this.userForm = this.formBuilder.group({
      fName: ['', Validators.required],
      lName: ['', [Validators.required, Validators.minLength(2)]],
      mName: ['', Validators.required],
      hasMiddleName: false
    });
  }

}
