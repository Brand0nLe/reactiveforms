import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent implements OnInit {




submitForm() {
    if(this.userForm.invalid) {
      alert('Fix errors on form');
    } else {
      alert('Succesful!');
       console.log(this.userForm.value);
      this.userForm.reset();
    }}


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


  	
 noJoseph(c: AbstractControl): {[key: string]: boolean} | null {
  if (c.value && c.value === 'Joseph') {
    return { 'itsJoseph': true};
  }
  return null;
}





  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

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
      hasMiddleName: false
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



    


	


  

}}

function noJoseph(c: any, AbstractControl: any) {
  throw new Error('Function not implemented.');
}

