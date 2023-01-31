import { Component, OnInit } from '@angular/core';

// Form
import { NgForm } from '@angular/forms';

// Router
import { Router } from '@angular/router';

// Toaster
import { ToastrService } from 'ngx-toastr';

// Auth Service
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  async onSubmit(formV: NgForm) {
    const { email, password } = formV.form.value;
    const result = this.auth.signUp(email, password);
    console.log(result);
    try {
      this.router.navigateByUrl('/');
      this.toastr.success('SignUp Success!');
      formV.resetForm();
    } catch (err) {
      console.error(err.message);
      this.toastr.error('SignUp Failed!');
    }
  }
}
