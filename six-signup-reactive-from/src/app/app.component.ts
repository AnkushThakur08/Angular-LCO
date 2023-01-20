import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { PasswordChecker } from './custome-validators/password-checker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'six-signup-reactive-from';

  registerForm!: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        firstName: ['', [Validators.required, Validators.minLength(2)]],
        lastName: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassowrd: ['', [Validators.required]],
        acceptTandC: [false, Validators.requiredTrue],
      },
      { validators: PasswordChecker('password', 'confirmPassowrd') }
    );
  }

  // Helper
  get helper() {
    return this.registerForm.controls;
  }

  onSubmit = () => {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    console.table(this.registerForm.value);
    console.table(this.registerForm);
    alert('Success Signup\n' + JSON.stringify(this.registerForm.value));
  };

  onReset = () => {
    this.submitted = false;
    this.registerForm.reset();
  };
}
