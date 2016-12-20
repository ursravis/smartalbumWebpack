/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';
import { UserService } from './shared/index';
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
    templateUrl: './app.html'
})
export class AppComponent {


  constructor(
    public appState: AppState,private userService:UserService) {
this.userService.tokenExpired.subscribe(user=>{
  //document.getElementById("logoutModalButton").click();
});
  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}


