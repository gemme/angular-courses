import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
      confirmation: new FormControl('', [Validators.required, Validators.minLength(3)])
    }, {
      validators: this.matchPasswords.bind(this)
    });
  }

  signup() {
    console.log('this.form', this.form);
    this.matchPasswords();
  }

  matchPasswords() {
    if(!this.form) return null;
    const {password, confirmation} = this.form.getRawValue();
    if(password === confirmation){
      console.log('matches password');
      return null;
    } else {
      console.log('mismatches password');
      return {
        match: true
      }
    }
  }
}
