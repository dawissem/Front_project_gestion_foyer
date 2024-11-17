import { Component } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  hideCurrentPassword: boolean = true; // Toggle for current password visibility
  hideNewPassword: boolean = true; // Toggle for new password visibility
  hideConfirmPassword: boolean = true; // Toggle for confirm password visibility

  changePassword() {
    // Logic for changing the password
  }
}
