import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'six-signup-reactive-from';

  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
    });
  }

  onSubmit = () => {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    console.table(this.registerForm.value);
    console.table(this.registerForm);

    alert('Success Signup \n' + JSON.stringify(this.registerForm.value));
  };

  onReset = () => {
    this.submitted = false;
    this.registerForm.reset();
  };
}
