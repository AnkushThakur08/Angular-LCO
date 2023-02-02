import { Component, OnInit } from '@angular/core';

// Router
import { Router } from '@angular/router';

// Toastr
import { ToastrService } from 'ngx-toastr';

// Auth Service
import { AuthService } from 'src/app/services/auth.service';

// NgForm
import { NgForm } from '@angular/forms';

// Finalize (When things are completed, what TODO)
import { finalize } from 'rxjs/operators';

// Firebase
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFireDatabase } from '@angular/fire/compat/database';

// Borwser Image Resizer
import { readAndCompressImage } from 'browser-image-resizer';

// Image Config
import { imageConfig } from 'src/app/utils/config';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private router: Router,
    private db: AngularFireDatabase,
    private storage: AngularFireStorage,
    private toastr: ToastrService
  ) {}

  // picture: string = '';
  picture: any;

  uploadPercentage: number = 0;

  ngOnInit(): void {}

  onSubmit(formV: NgForm) {
    const { email, password, username, country, bio, name } = formV.form.value;

    /* We can chain mutiple THEN */
    /* 1st .then will just create the user with email and password */
    this.auth
      .signUp(email, password)
      .then((res) => {
        console.log(res);
        const { uid } = res.user;

        this.db.object(`/users/${uid}`).set({
          id: uid,
          name: name,
          email: email,
          instaUserName: username,
          country: country,
          bio: bio,
          picture: this.picture,
        });
      })
      .then(() => {
        this.router.navigateByUrl('/');
        this.toastr.success('SignUp Success');
      })
      .catch((err) => {
        this.toastr.error('Signup Failed');
        this.toastr.error(err.message);
      });
  }

  async uploadFile(event) {
    const file = event.target.file[0];

    let resizedImage = readAndCompressImage(file, imageConfig);

    const filePath = file.name; /* rename the image with UUID */
    /* ref means, in firebase get that DB URL */
    const fileRef = this.storage.ref(filePath);

    // Now Finally Upload
    const task = this.storage.upload(filePath, resizedImage);

    task.percentageChanges().subscribe((percentage) => {
      this.uploadPercentage = percentage;
    });

    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            this.picture = url;
            this.toastr.success('Image Upload Successfully');
          });
        })
      )
      .subscribe();
  }
}
