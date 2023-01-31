import { Component, OnInit } from '@angular/core';

// Router
import { Router } from '@angular/router';

// Toaster
import { ToastrService } from 'ngx-toastr';

// Auth Service
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}
}
