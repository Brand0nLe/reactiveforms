import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent implements OnInit {
  
  userForm!: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }



get nickNames(){
  return this.userForm.get('nickNames') as FormArray;
}

  
  
  setValue() {
    this.userForm.setValue({
      fName: 'Cassandra',
      lName: 'Pamplona',
      mName: 'Casey',
      hasMiddleName: true
    });
  }
  
  patchValue() {
    this.userForm.patchValue({
      fName: 'Casey'
    });
  }
  
  submitForm() {
    if (this.userForm.invalid) {
      alert('Fix errors on form');
    } else {
      alert('Succesful!');
      console.log(this.userForm.value);
      this.userForm.reset();
    }
  }
  
  
  noJoseph(c: AbstractControl): { [key: string]: boolean } | null {
    if (c.value && c.value === 'Joseph') {
      return { 'itsJoseph': true };
    }
    return null;
  }
  
  
  passwordMatch(c: AbstractControl): { [key: string]: boolean } | null {
    console.log('password function here');
    const password = c.get('password');
    const confirmPassword = c.get('confirmPassword');
    if (password?.value && confirmPassword?.value && password.value !== confirmPassword.value) {
      return { 'mismatch': true };
    }
    return null;
  }

  addNickName(){
    this.nickNames.push(this.formBuilder.control(''));
  }

  






  ngOnInit() {
    // this.userForm = new FormGroup({
    //   fName: new FormControl('', Validators.required),
    //   lName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    //   mName: new FormControl('', Validators.required),
    //   hasMiddleName: new FormControl(false)

    // });


    this.userForm = this.formBuilder.group({
      fName: ['', [Validators.required, Validators.minLength(2), this.noJoseph]],
      lName: ['', [Validators.required, Validators.minLength(2)]],
      mName: ['', Validators.required],
      passwordGroup: this.formBuilder.group({
        password: null,
        confirmPassword: null
      }, {validator: this.passwordMatch}),
      hasMiddleName: false,
      nickNames: this.formBuilder.array([
        this.formBuilder.control('')
      ])
    });



    this.userForm.get('hasMiddleName')?.valueChanges.subscribe(val => {
      const control = this.userForm.get('mName');
      if (val) {
        control?.clearValidators();
      } else {
        control?.setValidators(Validators.required);
      }
      control?.updateValueAndValidity();
    });



  }
}


