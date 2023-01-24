import { Component, OnInit } from '@angular/core';

// Services
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

// Router
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  email: any;
  constructor(
    private auth: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {
    auth.getUser().subscribe((user) => {
      this.email = user?.email;
    });
  }

  ngOnInit(): void {}

  async handleSignOut() {
    try {
      const res = await this.auth.signOut();
      this.router.navigateByUrl('/signin');
      this.toastr.info('Please Login to Continue');
      this.email = null;
    } catch (error) {
      this.toastr.error('Something went wrong');
    }
  }
}
