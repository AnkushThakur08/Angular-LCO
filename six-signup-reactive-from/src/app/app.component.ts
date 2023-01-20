import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassowrd: ['', Validators.required],
      acceptTandC: [false, Validators.requiredTrue],
    });
  }

  onSubmit = () => {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return alert('Form contains invalid Value');
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
