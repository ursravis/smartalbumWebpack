export class Todo {
    public name: string;
    public done: boolean;
    public todoId: number;
    public importance: string;
    static clone(todo: Todo): Todo {
        return new Todo(todo.name, todo.done,todo.todoId,todo.importance);
    }

    constructor(name: string, done = false, todoId: number,importance: string) {
        this.name = name;
        this.done = done;
        this.todoId=todoId;
        this.importance=importance;
    }

    clear() {
        this.name = '';
        this.done = false;
        this.todoId=0;
    }
}
