webpackJsonp([3],{210:function(t,e,n){"use strict";function o(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}o(n(512)),o(n(513))},244:function(t,e,n){"use strict";var o=n(75),r=n(0),i=[],a=function(t){return t};r.enableProdMode(),a=function(t){return o.disableDebugTools(),t},i=i.slice(),e.decorateModuleRef=a,e.ENV_PROVIDERS=i.slice()},329:function(t,e,n){"use strict";function o(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}o(n(511))},330:function(t,e,n){"use strict";function o(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}o(n(514)),o(n(515))},331:function(t,e,n){"use strict";var o=n(0),r=n(83),i=function(){function t(){this._notifications=new r.Subject,this.noteAdded=this._notifications.asObservable()}return t.prototype.add=function(t){this._notifications.next(t)},t=__decorate([o.Injectable(),__metadata("design:paramtypes",[])],t)}();e.NotificationsService=i},383:function(t,e,n){"use strict";function o(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}o(n(508))},40:function(t,e,n){"use strict";function o(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}o(n(522)),o(n(519)),o(n(518)),o(n(520)),o(n(521))},407:function(t,e,n){"use strict";function o(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}o(n(517)),o(n(331)),o(n(516))},507:function(t,e,n){"use strict";var o=n(0),r=n(40),i=function(){function t(t){this.userService=t,this.angularclassLogo="assets/img/angularclass-avatar.png",this.name="Angular 2 Webpack Starter",this.url="https://twitter.com/AngularClass",console.log("app component"),this.userService.tokenExpired.subscribe(function(t){})}return t.prototype.ngOnInit=function(){console.log("app component")},t=__decorate([o.Component({selector:"app",encapsulation:o.ViewEncapsulation.None,styles:[n(706)],template:n(684)}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.UserService&&r.UserService)&&e||Object])],t);var e}();e.AppComponent=i},508:function(t,e,n){"use strict";var o=n(0),r=n(75),i=n(108),a=n(136),s=n(60),c=n(244),u=n(510),l=n(507),d=n(509),p=n(329),f=n(330),g=n(40),m=n(210),v=n(407),h=d.APP_RESOLVER_PROVIDERS.concat([v.NotificationsService]),b=function(){function t(){}return t=__decorate([o.NgModule({bootstrap:[l.AppComponent],declarations:[l.AppComponent,p.HomeComponent,f.NoContentComponent,f.UnAuthorizeComponent,v.NotificationComponent],imports:[r.BrowserModule,i.FormsModule,a.HttpModule,m.LoginModule,s.RouterModule.forRoot(u.ROUTES,{}),g.SharedModule.forRoot()],providers:[c.ENV_PROVIDERS,h]}),__metadata("design:paramtypes",[])],t)}();e.AppModule=b},509:function(t,e,n){"use strict";var o=n(0),r=n(10);n(691);var i=function(){function t(){}return t.prototype.resolve=function(t,e){return r.Observable.of({res:"I am data"})},t=__decorate([o.Injectable(),__metadata("design:paramtypes",[])],t)}();e.DataResolver=i,e.APP_RESOLVER_PROVIDERS=[i]},510:function(t,e,n){"use strict";var o=n(329),r=n(330),i=n(40),a=n(210);e.ROUTES=[{path:"",component:o.HomeComponent,canActivate:[i.LoggedInGuard]},{path:"login",component:a.LoginComponent},{path:"projects",loadChildren:function(){return new Promise(function(t){n.e(0).then(function(e){t(n(723).ProjectModule)}.bind(null,n)).catch(n.oe)})},canLoad:[i.LoggedInGuard]},{path:"todolist",loadChildren:function(){return new Promise(function(t){n.e(1).then(function(e){t(n(722).TodolistModule)}.bind(null,n)).catch(n.oe)})},canLoad:[i.AdminGuard]},{path:"401",component:r.UnAuthorizeComponent},{path:"**",component:r.NoContentComponent}]},511:function(t,e,n){"use strict";var o=n(0),r=function(){function t(){}return t.prototype.ngOnInit=function(){console.log("hello `Home` component")},t=__decorate([o.Component({selector:"home",styles:[n(707)],template:n(685)}),__metadata("design:paramtypes",[])],t)}();e.HomeComponent=r},512:function(t,e,n){"use strict";var o=n(0),r=n(60),i=n(40),a=function(){function t(t,e){this.userService=t,this.router=e,this.user=new i.User,this.user.userName="Admin",this.user.password="Admin"}return t.prototype.onSubmit=function(){var t=this.userService.login(this.user.userName,this.user.password);null!=t&&this.router.navigate([t])},t=__decorate([o.Component({template:n(686)}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof i.UserService&&i.UserService)&&e||Object,"function"==typeof(a="undefined"!=typeof r.Router&&r.Router)&&a||Object])],t);var e,a}();e.LoginComponent=a},513:function(t,e,n){"use strict";var o=n(0),r=n(40),i=n(210),a=n(108),s=n(61),c=function(){function t(){}return t=__decorate([o.NgModule({declarations:[i.LoginComponent],imports:[r.SharedModule,s.CommonModule,a.FormsModule],exports:[i.LoginComponent]}),__metadata("design:paramtypes",[])],t)}();e.LoginModule=c},514:function(t,e,n){"use strict";var o=n(0),r=function(){function t(){}return t=__decorate([o.Component({selector:"no-content",template:"\n    <div>\n      <h1>404: page missing</h1>\n    </div>\n  "}),__metadata("design:paramtypes",[])],t)}();e.NoContentComponent=r},515:function(t,e,n){"use strict";var o=n(0),r=function(){function t(){}return t=__decorate([o.Component({selector:"no-content",template:"\n    <div>\n      <h1>401: You are unauthorized.</h1>\n    </div>\n  "}),__metadata("design:paramtypes",[])],t)}();e.UnAuthorizeComponent=r},516:function(t,e,n){"use strict";var o=n(0),r=n(331),i=function(){function t(t){var e=this;this._notifications=t,this._notes=new Array,t.noteAdded.subscribe(function(t){e._notes.push(t),setTimeout(function(){e.hide.bind(e)(t)},3e3)})}return t.prototype.hide=function(t){var e=this._notes.indexOf(t);e>=0&&this._notes.splice(e,1)},t=__decorate([o.Component({selector:"notifications",template:'\n    <div class="notifications">\n        <div (click)="hide(note)" class="{{ note.type }}"\n                *ngFor="let note of _notes">\n            {{ note.message }}\n        </div>\n    </div>\n    ',styles:[n(708)]}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.NotificationsService&&r.NotificationsService)&&e||Object])],t);var e}();e.NotificationComponent=i},517:function(t,e){"use strict";var n=function(){function t(t,e){void 0===t&&(t=""),void 0===e&&(e=""),this.type=t,this.message=e}return t}();e.Notification=n},518:function(t,e,n){"use strict";var o=n(0),r=n(60),i=n(40),a=function(){function t(t,e){this.userService=t,this.router=e}return t.prototype.canActivate=function(t,e){return"/login"===e.url||this.userService.isLoggedIn()?!!this.userService.isAdmin()||(this.router.navigate(["/401"]),!1):(this.router.navigate(["/login"]),!1)},t.prototype.canLoad=function(t){var e=t.path;return this.userService.redirectURL=e,this.userService.isLoggedIn()?!!this.userService.isAdmin()||(this.router.navigate(["/401"]),!1):(this.router.navigate(["/login"]),!1)},t=__decorate([o.Injectable(),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof i.UserService&&i.UserService)&&e||Object,"function"==typeof(n="undefined"!=typeof r.Router&&r.Router)&&n||Object])],t);var e,n}();e.AdminGuard=a},519:function(t,e,n){"use strict";var o=n(0),r=n(60),i=n(40),a=function(){function t(t,e){this.userService=t,this.router=e}return t.prototype.canActivate=function(t,e){return!("/login"!==e.url&&!this.userService.isLoggedIn())||(this.router.navigate(["/login"]),!1)},t.prototype.canLoad=function(t){var e=t.path;return this.userService.redirectURL=e,!!this.userService.isLoggedIn()||(this.router.navigate(["/login"]),!1)},t=__decorate([o.Injectable(),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof i.UserService&&i.UserService)&&e||Object,"function"==typeof(n="undefined"!=typeof r.Router&&r.Router)&&n||Object])],t);var e,n}();e.LoggedInGuard=a},520:function(t,e,n){"use strict";var o=n(0),r=n(40),i=function(){function t(){}return t.forRoot=function(){return{ngModule:t,providers:[r.UserService,r.LoggedInGuard,r.AdminGuard]}},t=__decorate([o.NgModule({}),__metadata("design:paramtypes",[])],t)}();e.SharedModule=i},521:function(t,e){"use strict";var n=function(){function t(){}return t}();e.User=n},522:function(t,e,n){"use strict";var o=n(0),r=n(136),i=n(40),a=n(60),s=n(83),c=function(){function t(t,e){this.http=t,this.router=e,this.loggedIn=!1,this.authTimeOut=new s.Subject,this.tokenExpired=this.authTimeOut.asObservable(),this.redirectURL="",this.loggedIn=!!localStorage.getItem("auth_token"),this.loggedInUser=JSON.parse(localStorage.getItem("profile"))}return t.prototype.login=function(t,e){return t.toLowerCase()==e.toLowerCase()?(this.loggedIn=!0,this.loggedInUser=new i.User,this.loggedInUser.firstName="John",this.loggedInUser.lastName="Doe",this.loggedInUser.role=t,localStorage.setItem("profile",JSON.stringify(this.loggedInUser)),localStorage.setItem("auth_token","testtoken"),this.checkTokenExpired(),this.redirectURL):null},t.prototype.checkTokenExpired=function(){var t=this;setTimeout(function(){t.authTimeOut.next(t.loggedInUser)},2e4)},t.prototype.getAuthTokenHeader=function(){var t=new r.Headers;t.append("Content-Type","application/json");var e=localStorage.getItem("auth_token");return t.append("Authorization","Bearer "+e),t},t.prototype.logout=function(){localStorage.removeItem("auth_token"),localStorage.removeItem("profile"),this.loggedIn=!1,this.router.navigate(["/"]),window.location.reload(!1)},t.prototype.isLoggedIn=function(){return this.loggedIn},t.prototype.isAdmin=function(){return null!=this.loggedInUser&&this.loggedInUser.role.toLowerCase()=="Admin".toLowerCase()},t=__decorate([o.Injectable(),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.Http&&r.Http)&&e||Object,"function"==typeof(n="undefined"!=typeof a.Router&&a.Router)&&n||Object])],t);var e,n}();e.UserService=c},681:function(t,e,n){e=t.exports=n(85)(),e.push([t.i,"body,html{height:100%;font-family:Arial,Helvetica,sans-serif}span.active{background-color:gray}.panel-title{font-weight:700;color:color(primary)}li{font-size:large}div.panel-heading{font-size:x-large}#listofImages{background-color:#fff;display:inline-block;list-style-type:none;margin:5px}#listofImages li{width:300px;height:270px;float:left;margin:2px;border-color:#000;border:1px solid #000;text-align:center}.listImage{vertical-align:top;width:300px;height:200px}.image,.listImage{max-height:100%;max-width:100%}.thumbImage{margin-top:5px;vertical-align:top;text-align:right}.modal.modal-wide .modal-dialog{width:80%}.modal-wide .modal-body{overflow-y:auto}.center-fix{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center}.main-spinner{font-size:3em;color:color(primary)}.navbar-right{margin-right:0!important}",""])},682:function(t,e,n){e=t.exports=n(85)(),e.push([t.i,"",""])},683:function(t,e,n){e=t.exports=n(85)(),e.push([t.i,".notifications{right:10px;position:absolute;top:10%}.notifications div{border:1px solid;border-radius:4px;box-shadow:0 12px 15px 0 rgba(0,0,0,.22),0 17px 20px 0 rgba(0,0,0,.12);cursor:pointer;margin-bottom:.5em;min-height:3em;padding:1em;text-align:center;width:300px}.notifications div.success{background-color:#dff2bf;border-color:#9fd840;color:#4a6a15}.notifications div.error{background-color:#ffbaba;border-color:#ff8787;color:#870000}.notifications div.warn{background-color:#feefb3;border-color:#fccf1c;color:#8c7102}.notifications div.info{background-color:#bde5f8;border-color:#33afe9;color:#1175a5}",""])},684:function(t,e){t.exports='\r\n<nav class="navbar navbar-inverse navbar-fixed-top">\r\n  <div class="container">\r\n    <div class="navbar-header">\r\n      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">\r\n        <span class="sr-only">Toggle navigation</span>\r\n        <span class="icon-bar"></span>\r\n        <span class="icon-bar"></span>\r\n        <span class="icon-bar"></span>\r\n      </button>\r\n      <a class="navbar-brand" [routerLink]="[\'/\']">Smart Album</a>\r\n    </div>\r\n    <div id="navbar" class="collapse navbar-collapse">\r\n      <ul class="nav navbar-nav">          \r\n         <li><a [routerLink]="[\'/projects\']">Project</a></li>\r\n        <li><a [routerLink]="[\'./todolist\']" *ngIf="userService.isAdmin()" >Todolist</a></li>  \r\n         <!--<li><a [routerLink]="[\'./login\']">Login</a></li>-->\r\n\r\n      </ul>\r\n         <ul class="nav navbar-nav navbar-right">\r\n       \r\n           <li><a [routerLink]="[\'./login\']" *ngIf="userService.isLoggedIn()">Login</a></li>\r\n         \r\n          <li> <a (click)=userService.logout() *ngIf="userService.isLoggedIn()">Log Out</a>          </li>\r\n        </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n\r\n<div class="container" style="margin-top: 100px;">\r\n      <router-outlet></router-outlet>\r\n  </div>\r\n  <notifications></notifications>\r\n  \t<button type="button" id="logoutModalButton" [hidden]="true" data-toggle="modal" data-target="#logoutModel">Open Modal</button>\r\n\t\t\t<div id="logoutModel" class="modal modal-wide fade" role="dialog">\r\n\t\t\t\t<div class="modal-dialog  modal-lg">\r\n\t\t\t\t\t<div class="modal-content">\r\n\t\t\t\t\t\t<div class="modal-header">\r\n\t\t\t\t\t\t\t<button type="button" class="close" data-dismiss="modal">&times;</button>\r\n\t\t\t\t\t\t\t<h4 class="modal-title">Session Expired</h4>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class="modal-body">\r\n\t\t\t\t\t\t\t<div >\r\n\t\t\t\t\tLogged in User\tSession Expired, Please relogin? \r\n          <br/>\r\n          \t<button type="button" class="btn btn-default" >Yes</button>\r\n            <button type="button" class="btn btn-default" >No</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class="modal-footer">\r\n\t\t\t\t\t\t\t<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n   '},685:function(t,e){t.exports='<div class="card-container">\n  <h1 x-large class="sample-content">Hello From Home</h1>\n\n\n\n  \n'},686:function(t,e){t.exports='<div class="login jumbotron center-block">\r\n  <h1>Login</h1>\r\n \r\n  <div class="form-group">\r\n    <label for="username">Username</label>\r\n    <input type="text" [(ngModel)]="user.userName"  class="form-control" name="username" placeholder="Username">\r\n  </div>\r\n  <div class="form-group">\r\n    <label for="password">Password</label>\r\n    <input type="password"  [(ngModel)]="user.password"  class="form-control" name="password" placeholder="Password">\r\n  </div>\r\n  <button class="btn btn-default" (click)="onSubmit()" >Submit</button>\r\n<label>Enter same username and password </label>\r\n</div>'},691:function(t,e,n){"use strict";var o=n(10),r=n(74);o.Observable.of=r.of},706:function(t,e,n){var o=n(681);"string"==typeof o?t.exports=o:t.exports=o.toString()},707:function(t,e,n){var o=n(682);"string"==typeof o?t.exports=o:t.exports=o.toString()},708:function(t,e,n){var o=n(683);"string"==typeof o?t.exports=o:t.exports=o.toString()},719:function(t,e,n){"use strict";var o=n(152),r=n(244),i=n(383);o.platformBrowserDynamic().bootstrapModule(i.AppModule).then(r.decorateModuleRef).catch(function(t){return console.error(t)})}},[719]);