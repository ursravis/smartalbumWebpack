import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { ProjectDetailsComponent } from './project-details.component';
import {ProjectListComponent} from './project-list.component';

export const ProjectRoutes: Routes = [
  { path: '', component: ProjectListComponent },
  {path:':id',component:ProjectDetailsComponent}
];

export const projectRouting: ModuleWithProviders =
                RouterModule.forChild(ProjectRoutes);

