import { FormGroup } from '@angular/forms';

export function PasswordChecker(
  controlName: string,
  confirmContolName: string
) {
  return (formGroup: FormGroup) => {
    const password = formGroup.controls[controlName];
    const confirmPassword = formGroup.controls[confirmContolName];

    if (password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ mustmatch: true });
    } else {
      confirmPassword.setErrors(null);
    }
  };
}
