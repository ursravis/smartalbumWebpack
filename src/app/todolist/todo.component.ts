import { Component,Input,Output,EventEmitter } from '@angular/core';

import { Todo } from './todo.model';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

@Component({
    selector: 'todo-view',
    templateUrl: './todo.component.html',
    animations:[
        trigger('animation1',[
            state('high', style({
        backgroundColor: '#bc1234',
        transform: 'scale(1.5)',
      })),
      state('medium',   style({
        backgroundColor: '#265cc9',
        transform: 'scale(1.3)'
      })),
            state('low', style({
        backgroundColor: '#b0db3b',
        transform: 'scale(1)'
      })),
      transition('high => medium', [
      animate(100, style({transform: 'translateX(100%) scale(1)'}))
    ]),
      transition('medium => low',  [
      style({transform: 'translateX(100%) scale(0)'}),
      animate(200)
    ]),
       transition('low => high',[
                style({transform: 'translateX(-100%) scale(1)'}),
                animate(200)
                ])
        ])
    ]
})
export class TodoComponent {
    @Input() todo: Todo;
    @Output() onDeleted=new EventEmitter<number>();
    constructor() {
       
    }

    delTodo() {
       this.onDeleted.emit(this.todo.todoId);
    }
    changeImportance(importance:string)
    {
        switch(importance)
        {
            case 'high':
            this.todo.importance='medium';
            break;
              case 'medium':
            this.todo.importance='low';
            break;
              case 'low':
            this.todo.importance='high';
            break;
        }

    }
}
