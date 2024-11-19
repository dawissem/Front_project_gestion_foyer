import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent {

  
  fullName: string = " Wissem ";
  email: string = "dawissem.wm@gmail.com";
  router: any;


  redirectToProfile(): void {
    this.router.navigate(['/profiledetails']);
  
  }

}
