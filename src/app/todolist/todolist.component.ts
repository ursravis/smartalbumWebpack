import { Component } from '@angular/core';

import { Todo } from './todo.model';

@Component({
    selector: 'as-todolist',
    templateUrl: './todolist.html'
})
export class TodolistComponent {
    public todo: Todo;
    private list: Todo[];
    private showCompleted: Boolean;

    constructor() {
        this.showCompleted = true;
        this.todo = new Todo('Add me to list!', false,0);
        this.list = [
            new Todo('Its cool',false,1),
            new Todo('Hello', true,2)
        ];
    }

    addTodo() {
        var newTodo=Todo.clone(this.todo);
        newTodo.todoId=this.list.length+1;
        this.list = this.list.concat(newTodo);
        this.todo.clear();
    }

    onDelete(todoId: number) {
        this.list = this.list.filter(
            (todo, index) => todo.todoId !== todoId);
    }
}
