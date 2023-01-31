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
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  Error: any;

  async onSubmit(formV: NgForm) {
    const { email, password } = formV.form.value;

    await this.auth
      .signIn(email, password)
      .then((user) => {
        if (user) {
          this.router.navigateByUrl('/');
          this.toastr.success('SignIn Success!');
        } else {
          this.toastr.error('SignIn Error');
        }
      })
      .catch((err) => {
        console.error(err.message);
        this.toastr.error(err);
      });
  }
}
