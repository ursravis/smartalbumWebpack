import { Component } from '@angular/core';

import { NotificationsService } from './notifications.service';
import { Notification } from './notifications.model';

@Component({
    selector: 'notifications',
    template:`
    <div class="notifications">
        <div (click)="hide(note)" class="{{ note.type }}"
                *ngFor="let note of _notes">
            {{ note.message }}
        </div>
    </div>
    `,
    styleUrls:['./notifications.component.css']
})
export class NotificationComponent {
    private _notes: Notification[];

    constructor(private _notifications: NotificationsService) {
        this._notes = new Array<Notification>();

        _notifications.noteAdded.subscribe(note => {
            this._notes.push(note);

            setTimeout(() => { this.hide.bind(this)(note) }, 3000);
        });
    }

    private hide(note) {
        let index = this._notes.indexOf(note);

        if (index >= 0) {
            this._notes.splice(index, 1);
        }
    }
}