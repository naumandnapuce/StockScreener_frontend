import { AfterViewInit, Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from './models/user-model';
import { AuthenticationService } from "../app/services/user-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser: UserModel;

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService
  ) {
      this.currentUser = null as any;
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x as any);
  }

  logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }
}


