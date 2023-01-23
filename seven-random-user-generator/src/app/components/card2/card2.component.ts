import { Component, OnInit, Input } from '@angular/core';

import {
  faEnvelope,
  faMapMarkedAlt,
  faPhone,
  faDatabase,
} from '@fortawesome/free-solid-svg-icons';

// Service
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css'],
})
export class Card2Component implements OnInit {
  @Input() user: any;

  constructor(private userService: UserService) {}

  faEnveloper = faEnvelope;
  faMapMarkedAlt = faMapMarkedAlt;
  faPhone = faPhone;
  faDatabase = faDatabase;

  // Dynamic Data
  data!: string;
  userEmail!: any;
  userAddress!: any;
  userPhone!: any;
  userDob!: any;

  showEmail() {
    this.userEmail = this.userService.getUser().subscribe((user) => {
      console.log(user);
    });

    this.userAddress = '';
    this.userPhone = '';
    this.userDob = '';
  }

  showAddress() {
    this.userEmail = '';
    this.userPhone = '';
    this.userDob = '';

    this.userAddress = this.userService.getUser().subscribe((user) => {
      console.log(user);
    });
  }

  showPhoneNumber() {
    this.userEmail = '';
    this.userAddress = '';
    this.userDob = '';

    this.userPhone = this.userService.getUser().subscribe((user) => {
      console.log(user);
    });
  }

  showDOB() {
    this.userEmail = '';
    this.userAddress = '';
    this.userPhone = '';

    this.userDob = this.userService.getUser().subscribe((user) => {
      console.log(user);
    });
  }

  ngOnInit(): void {}
}
