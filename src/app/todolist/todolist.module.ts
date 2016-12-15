import { NgModule } from '@angular/core';
import { CommonModule }     from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompletedFilterPipe, TodolistComponent,TodolistRouting ,TodoComponent} from './index';

@NgModule({
     imports: [
         CommonModule,
        FormsModule,
        TodolistRouting
    ],
    declarations: [
        CompletedFilterPipe,
        TodolistComponent,
        TodoComponent
    ],
   
    exports: [TodolistComponent,
        CompletedFilterPipe
    ]
})
export class TodolistModule {
}
