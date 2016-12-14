import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';
import { LoggedInGuard } from './shared/index';
import { LoginComponent } from './login/index';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent, canActivate: [LoggedInGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'projects', loadChildren: './project/project.module#ProjectModule?', canLoad: [LoggedInGuard] },
  { path: 'todolist', loadChildren: './todolist/todolist.module#TodolistModule', canLoad: [LoggedInGuard] },
  {
    path: 'detail', loadChildren: () => System.import('./+detail')
      .then((comp: any) => comp.default)
      , canActivate: [LoggedInGuard]
  },
  { path: '**', component: NoContentComponent },
];
