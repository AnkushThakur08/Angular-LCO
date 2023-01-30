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
}
