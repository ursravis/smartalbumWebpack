import { NgModule } from '@angular/core';
import { CommonModule }     from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompletedFilterPipe, TodolistComponent,TodolistRouting } from './index';

@NgModule({
     imports: [
         CommonModule,
        FormsModule,
        TodolistRouting
    ],
    declarations: [
        CompletedFilterPipe,
        TodolistComponent
    ],
   
    exports: [TodolistComponent,
        CompletedFilterPipe
    ]
})
export class TodolistModule {
}
