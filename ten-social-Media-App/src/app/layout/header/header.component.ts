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
  email!: any;
  constructor(
    private auth: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {
    /* As soon as Header Comes up, I want to check, I want to display the email of the user */
    auth.getUser().subscribe((user) => {
      this.email = user?.email;

      console.log('USER OBJ', user);
    });
  }

  ngOnInit(): void {}

  async handleSignOut() {
    try {
      await this.auth.signOut();
      this.toastr.success('Signout Successfully');
      this.router.navigateByUrl('/signin');
      this.email = '';
    } catch (error) {
      this.toastr.error('Problem in signOut');
    }
  }
}
