webpackJsonp([0],{716:function(t,e,r){"use strict";var n=r(0),o=r(152),i=r(73),a=r(725),s=r(720),c=r(719),l=r(718),p=function(){function t(){}return t=__decorate([n.NgModule({imports:[i.CommonModule,o.FormsModule,a.projectRouting],declarations:[s.ProjectListComponent,c.ProjectDetailsComponent],providers:[l.ProjectService]}),__metadata("design:paramtypes",[])],t)}();e.ProjectModule=p},718:function(t,e,r){"use strict";var n=r(0),o=r(134),i=r(10);r(736),r(735),r(367),r(737);var a=function(){function t(t){this._http=t,this._projectUrl="http://smartalbumwebapi.azurewebsites.net/api/projects",this.headers=new o.Headers({"Content-Type":"application/json"})}return t.prototype.getProjects=function(){return this._http.get(this._projectUrl).map(function(t){return t.json()}).do(function(t){return console.log("All: ")}).catch(this.handleError)},t.prototype.getProject=function(t){return this.getProjects().map(function(e){return e.find(function(e){return e.projectId===t})})},t.prototype.createProject=function(t){var e=JSON.stringify(t);return this._http.post(this._projectUrl,e,{headers:this.headers}).toPromise().then(function(){return t}).catch(this.handleError)},t.prototype.updateProject=function(t){var e=this._projectUrl+"/"+t.projectId,r=JSON.stringify(t);return this._http.put(e,r,{headers:this.headers}).toPromise().then(function(){return t}).catch(this.handleError)},t.prototype.createThumb=function(t){var e=this._projectUrl+"/"+t;return this._http.get(e).toPromise().then(function(t){return t.json().data}).catch(this.handleError)},t.prototype.handleError=function(t){return console.error(t),i.Observable.throw(t.json().error||"Server error")},t=__decorate([n.Injectable(),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.Http&&o.Http)&&e||Object])],t);var e}();e.ProjectService=a},719:function(t,e,r){"use strict";var n=r(0),o=r(105),i=r(726),a=r(724),s=r(718),c=function(){function t(t,e,r,n){this._route=t,this._router=e,this.elementRef=r,this._projectService=n,this.pageTitle="Project Details",this.showSelectedImage=!1,this.disableEdits=!0,this.files=[]}return t.prototype.ngOnInit=function(){var t=this;this.project=new i.IProject,this.sub=this._route.params.subscribe(function(e){var r=+e.id;r>0?t._projectService.getProject(r).subscribe(function(e){t.project=e},function(e){return t.errorMessage=e}):(t.project.projectId=-1,t.project.projectName="New Project",t.project.images=[])})},t.prototype.OnSaveClick=function(){var t=this;this.loading=!0,this.project.projectId>0?this._projectService.updateProject(this.project).then(function(){t.loading=!1,t.onBack()}):this._projectService.createProject(this.project).then(function(){t.loading=!1,t.onBack()})},t.prototype.onBack=function(){this._router.navigate(["projects"])},t.prototype.ngOnDestroy=function(){this.sub.unsubscribe()},t.prototype.onEditClick=function(){null!=this.cropper&&this.cropper.destroy();this.elementRef.nativeElement.querySelector("#selectedImage");this.disableEdits=!1},t.prototype.onCropClick=function(){this.cropper.crop()},t.prototype.onShowCropped=function(){this.croppedImageSrc=this.cropper.getCroppedCanvas().toDataURL(),this.project.filesSrc.push(this.croppedImageSrc),document.getElementById("openModalButton").click()},t.prototype.onZoomInClick=function(){this.cropper.zoom(.1)},t.prototype.onZoomOutClick=function(){this.cropper.zoom(-.1)},t.prototype.onRotateRightClick=function(){this.cropper.rotate(90)},t.prototype.onRotateLeftClick=function(){this.cropper.rotate(-90)},t.prototype.onMoveLeft=function(){this.cropper.move(-10,0)},t.prototype.onMoveRight=function(){this.cropper.move(10,0)},t.prototype.onMoveUp=function(){this.cropper.move(0,-10)},t.prototype.onMoveDown=function(){this.cropper.move(0,10)},t.prototype.onFlipHor=function(){this.cropper.scaleX(-1)},t.prototype.onFlipVirt=function(){this.cropper.scaleY(-1)},t.prototype.onSelectImage=function(t){null!=this.cropper&&this.cropper.destroy(),this.showSelectedImage=!0,this.selectedImageSrc=t,document.getElementById("openModalButton").click(),this.disableEdits=!0},t.prototype.fileChange=function(t){for(var e=this,r=0;r<t.files.length;r++){var n=t.files[r],o=document.createElement("img"),i=new FileReader;i.addEventListener("load",function(t){o.src=t.target.result;var r=e.createThumbnail(o,64,n.type),i=new a.SmartImage;i.thumbnailSrc=r,i.imageSrc=t.target.result,i.imageName=n.name,i.imageType=n.type,e.project.images.push(i)},!1),i.readAsDataURL(t.files[r])}},t.prototype.createThumbnail=function(t,e,r){void 0===e&&(e=64),void 0===r&&(r="image/jpeg");var n,o=document.createElement("canvas"),i=t.width,a=t.height;n=i>a?e/i:e/a,o.width=i*n,o.height=a*n;var s=o.getContext("2d");s.drawImage(t,0,0,o.width,o.height);var c=o.toDataURL(r);return c},t.prototype.resize=function(t,e,r){void 0===e&&(e=300),void 0===r&&(r=300);var n=document.createElement("canvas");console.log("Size Before: "+t.src.length+" bytes");var o=t.width,i=t.height;o>i?o>e&&(i*=e/o,o=e):i>r&&(o*=r/i,i=r),n.width=o,n.height=i;var a=n.getContext("2d");a.drawImage(t,0,0,o,i);var s=n.toDataURL("image/jpeg");return console.log("Size After:  "+s.length+" bytes"),s},t.prototype.createThumbsOnServer=function(){var t=this;null!=this.project&&(this.loading=!0,this._projectService.createThumb(this.project.projectId).then(function(e){return t.onBack()}))},t=__decorate([n.Component({template:r(732)}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.ActivatedRoute&&o.ActivatedRoute)&&e||Object,"function"==typeof(c="undefined"!=typeof o.Router&&o.Router)&&c||Object,"function"==typeof(l="undefined"!=typeof n.ElementRef&&n.ElementRef)&&l||Object,"function"==typeof(p="undefined"!=typeof s.ProjectService&&s.ProjectService)&&p||Object])],t);var e,c,l,p}();e.ProjectDetailsComponent=c},720:function(t,e,r){"use strict";var n=r(0),o=r(718),i=function(){function t(t){this._productService=t,this.pageTitle="Project List"}return t.prototype.ngOnInit=function(){var t=this;this._productService.getProjects().subscribe(function(e){return t.projects=e},function(e){return t.errorMessage=e})},t.prototype.onRatingClicked=function(t){this.pageTitle="Project List: "+t},t=__decorate([n.Component({template:r(733),styles:[r(739)]}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.ProjectService&&o.ProjectService)&&e||Object])],t);var e}();e.ProjectListComponent=i},724:function(t,e){"use strict";var r=function(){function t(){}return t}();e.SmartImage=r},725:function(t,e,r){"use strict";var n=r(105),o=r(719),i=r(720);e.ProjectRoutes=[{path:"",component:i.ProjectListComponent},{path:":id",component:o.ProjectDetailsComponent}],e.projectRouting=n.RouterModule.forChild(e.ProjectRoutes)},726:function(t,e){"use strict";var r=function(){function t(){}return t}();e.IProject=r},730:function(t,e,r){e=t.exports=r(106)(),e.push([t.i,"thead{color:#337ab7}",""])},732:function(t,e){t.exports='<div class=\'panel panel-primary\'>\r\n\t<div class=\'panel-heading\' style=\'font-size:large\'>\r\n\t\t{{pageTitle + \': \' + project.projectName }}\r\n\t\t<button id="btnThumb" class="btn btn-default pull-right" (click)="createThumbsOnServer()">Create Thumbs</button>\r\n\t</div>\r\n\r\n\t<div class=\'panel-body\'>\r\n\t\t<form class="form-inline">\r\n\t\t\t<div class="form-group">\r\n\t\t\t\t<label for="exampleInputName2">Project Name:</label>\r\n\t\t\t\t<input name="projectNametxt" type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe" [(ngModel)]="project.projectName">\r\n\t\t\t</div>\r\n\t\t\t<div class="form-group">\r\n\t\t\t\t<label>Images</label>\r\n\t\t\t\t<label class="btn btn-default btn-file"><input type="file" multiple (change)="fileChange(input)" #input />\r\n        </label>\r\n\r\n\r\n\t\t\t</div>\r\n\t\t\t<button type="submit" class="btn btn-primary" (click)="OnSaveClick()">Save</button>\r\n\t\t</form>\r\n\r\n\t\t<button type="button" id="openModalButton" [hidden]="true" data-toggle="modal" data-target="#myModal">Open Modal</button>\r\n\t\t<div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\t\t\t<div id="myModal" class="modal modal-wide fade" role="dialog">\r\n\t\t\t\t<div class="modal-dialog  modal-lg">\r\n\t\t\t\t\t<div class="modal-content">\r\n\t\t\t\t\t\t<div class="modal-header">\r\n\t\t\t\t\t\t\t<button type="button" class="close" data-dismiss="modal">&times;</button>\r\n\t\t\t\t\t\t\t<h4 class="modal-title">Edit Image</h4>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class="modal-body">\r\n\t\t\t\t\t\t\t<div *ngIf="showSelectedImage">\r\n\t\t\t\t\t\t\t\t<table style="height: 600px">\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td width="100%" valign="center" style="text-align: center;" align="center">\r\n\t\t\t\t\t\t\t\t\t\t\t<img id="selectedImage" class="image" src="{{ selectedImageSrc }}" alt="" />\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t<!--<td width="135px" valign="top">\r\n\r\n                                            <a class=\'btn btn-default\' (click)=\'onEditClick()\' style=\'width:135px ;margin:5px;text-align:left\'>\r\n                                                <img src="./assets/images/edit.png" style="height:25px" /> Edit\r\n                                            </a>\r\n                                            <br/>\r\n\r\n                                            <button class=\'btn btn-default\' (click)=\'onCropClick()\' [disabled]="disableEdits"  style=\'width:135px ;margin:5px;text-align:left\'>\r\n                                                <img src="./assets/images/cut.png" style="height:25px" /> Crop\r\n                                            </button>\r\n                                            <br/>\r\n\r\n\r\n                                            <button class=\'btn btn-default\' (click)=\'onZoomOutClick()\' [disabled]="disableEdits"  style=\'width:135px ;margin:5px;text-align:left\'>\r\n                                                <img src="./assets/images/expand.png" style="height:25px" /> Zoom Out\r\n                                            </button>\r\n                                            <br/>\r\n\r\n                                            <button class=\'btn btn-default\' (click)=\'onZoomInClick()\' [disabled]="disableEdits"  style=\'width:135px ;margin:5px;text-align:left\'>\r\n                                                <img src="./assets/images/decrease.png" style="height:25px" /> Zoom In\r\n                                            </button>\r\n                                            <br/>\r\n                                            <button class=\'btn btn-default\' (click)=\'onRotateRightClick()\' [disabled]="disableEdits"  style=\'width:135px ;margin:5px;text-align:left\'>\r\n                                                <img src="./assets/images/redo.png" style="height:25px" /> Rotate Right\r\n                                            </button>\r\n                                            <br/>\r\n                                            <button class=\'btn btn-default\' (click)=\'onRotateLeftClick()\' [disabled]="disableEdits"  style=\'width:135px ;margin:5px;text-align:left\'>\r\n                                                <img src="./assets/images/undo.png" style="height:25px" /> Rotate Left\r\n                                            </button>\r\n                                            <br/>\r\n                                            <button class=\'btn btn-default\' (click)=\'onShowCropped()\' [disabled]="disableEdits"  style=\'width:135px ;margin:5px;text-align:left\'>\r\n                                                <img src="./assets/images/download.png" style="height:25px" /> Save As\r\n                                            </button>\r\n                                            <br/>\r\n                                            <div class="btn-group" style="margin:5px">\r\n                                                <button type="button" class="btn btn-primary"  [disabled]="disableEdits"  data-method="move" data-option="-10" data-second-option="0" title="Move Left"\r\n                                                    (click)="onMoveLeft()">\r\n                                               \r\n                                                <span class="fa fa-arrow-left"></span>\r\n                                              \r\n                                            </button>\r\n                                                <button type="button" class="btn btn-primary" [disabled]="disableEdits"  data-method="move" data-option="10" data-second-option="0" title="Move Right"\r\n                                                    (click)="onMoveRight()">\r\n                                              \r\n                                                <span class="fa fa-arrow-right"></span>\r\n                                                \r\n                                            </button>\r\n                                            </div>\r\n\r\n                                            <div class="btn-group" style="margin:5px">\r\n                                                <button type="button" class="btn btn-primary"  [disabled]="disableEdits"  data-method="move" data-option="0" data-second-option="-10" title="Move Up"\r\n                                                    (click)="onMoveUp()">\r\n                                                \r\n                                                <span class="fa fa-arrow-up"></span>\r\n                                               \r\n                                            </button>\r\n                                                <button type="button" class="btn btn-primary"  [disabled]="disableEdits"  data-method="move" data-option="0" data-second-option="10" title="Move Down"\r\n                                                    (click)="onMoveDown()">\r\n                                              \r\n                                                <span class="fa fa-arrow-down"></span>\r\n                                               \r\n                                            </button>\r\n                                            </div>\r\n                                            <div class="btn-group" style="margin:5px">\r\n                                                <button type="button" class="btn btn-primary"  [disabled]="disableEdits"  data-method="scaleX" data-option="-1" title="Flip Horizontal" (click)="onFlipHor()">\r\n                                           \r\n                                            <span class="fa fa-arrows-h"></span>\r\n                                           \r\n                                        </button>\r\n                                                <button type="button" class="btn btn-primary" [disabled]="disableEdits"  data-method="scaleY" data-option="-1" title="Flip Vertical" (click)="onFlipVirt()">\r\n                                           \r\n                                            <span class="fa fa-arrows-v"></span>\r\n                                          \r\n                                        </button>\r\n                                            </div>\r\n\r\n                                            <br/>\r\n                                        </td>-->\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</table>\r\n\r\n\t\t\t\t\t\t\t\t<!--<img id="croppedImage" src=\'{{ croppedImageSrc }}\' alt="" />-->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class="modal-footer">\r\n\t\t\t\t\t\t\t<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<ul id="listofImages">\r\n\t\t\t\t<li *ngFor="let imageData of project.images" (click)=\'onSelectImage(imageData.imageSrc)\' align="center" style="text-align: center;">\r\n\r\n\t\t\t\t\t<img id="image" class="listImage" src=\'{{ imageData.imageSrc }}\' alt="" />\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<label style="display: inline-block; text-align: left;verticle-align: middle">{{ imageData.imageName }}</label>\r\n\t\t\t\t\t\t<img id="thumbImage" class="thumbImage" src=\'{{ imageData.thumbnailSrc }}\' alt="" />\r\n\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\r\n\t\t</div>\r\n\t</div>\r\n    <div *ngIf="loading" style=" opacity: 1;\r\n    animation: fade 2s linear;">\r\n    <i class="center-fix main-spinner fa fa-spin fa-spinner"></i>\r\n    </div>\r\n\t<div class=\'panel-footer\'>\r\n\t\t<a class=\'btn btn-default\' (click)=\'onBack()\' style=\'width:80px\'>\r\n\t\t\t<i class=\'glyphicon glyphicon-chevron-left\'></i> Back\r\n\t\t</a>\r\n\t</div>\r\n\r\n</div>'},733:function(t,e){t.exports="<div class='panel panel-primary'>\r\n    <div class='panel-heading'>\r\n        {{pageTitle}}\r\n          <button class=\"btn btn-default pull-right\" [routerLink]=\"['/project', -1]\">New</button>\r\n    </div>\r\n\r\n    <!-- Filter the projects   -->\r\n    <div class='panel-body'>\r\n\r\n\r\n        <div class='has-error' *ngIf='errorMessage'>{{errorMessage}}</div>\r\n\r\n        <div class='table-responsive'>\r\n            <table class='table' *ngIf='projects && projects.length'>\r\n                <thead>\r\n                    <tr>\r\n                        <!--<th>\r\n                            <button class='btn btn-primary' (click)='toggleImage()'>\r\n                                {{showImage ? 'Hide' : 'Show'}} Image\r\n                            </button>\r\n                        </th>-->\r\n                        <th>Project</th>\r\n                        <th>Created By</th>\r\n                        <th>No Of Images</th>\r\n\r\n\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor='let project of projects '>\r\n                        <!--<td>\r\n                            <img *ngIf='showImage'\r\n                                 [src]='product.imageUrl'\r\n                                 [title]='product.productName | uppercase'\r\n                                 [style.width.px]='imageWidth' \r\n                                 [style.margin.px]='imageMargin'>\r\n                        </td>-->\r\n                        <td> <a [routerLink]=\"['/projects', project.projectId]\">\r\n                            {{project.projectName}}\r\n                            </a>\r\n                        </td>\r\n                        <td>{{ project.createdBy }}</td>\r\n                        <td>{{ project.noOfImages }}</td>\r\n\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>"},735:function(t,e,r){"use strict";var n=r(10),o=r(245);n.Observable.prototype.catch=o._catch,n.Observable.prototype._catch=o._catch},736:function(t,e,r){"use strict";var n=r(10),o=r(738);n.Observable.prototype.do=o._do,n.Observable.prototype._do=o._do},737:function(t,e,r){"use strict";var n=r(10),o=r(407);n.Observable.prototype.toPromise=o.toPromise},738:function(t,e,r){"use strict";function n(t,e,r){return this.lift(new a(t,e,r))}var o=this&&this.__extends||function(t,e){function r(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)},i=r(26);e._do=n;var a=function(){function t(t,e,r){this.nextOrObserver=t,this.error=e,this.complete=r}return t.prototype.call=function(t,e){return e._subscribe(new s(t,this.nextOrObserver,this.error,this.complete))},t}(),s=function(t){function e(e,r,n,o){t.call(this,e);var a=new i.Subscriber(r,n,o);a.syncErrorThrowable=!0,this.add(a),this.safeSubscriber=a}return o(e,t),e.prototype._next=function(t){var e=this.safeSubscriber;e.next(t),e.syncErrorThrown?this.destination.error(e.syncErrorValue):this.destination.next(t)},e.prototype._error=function(t){var e=this.safeSubscriber;e.error(t),e.syncErrorThrown?this.destination.error(e.syncErrorValue):this.destination.error(t)},e.prototype._complete=function(){var t=this.safeSubscriber;t.complete(),t.syncErrorThrown?this.destination.error(t.syncErrorValue):this.destination.complete()},e}(i.Subscriber)},739:function(t,e,r){var n=r(730);"string"==typeof n?t.exports=n:t.exports=n.toString()}});