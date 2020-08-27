import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges
} from '@angular/core';
import { User } from '../../models/user.model';

@Component({
    selector: 'ng-e-app-content',
    templateUrl: './app-content.component.html',
    styleUrls: ['./app-content.component.scss']
})
export class AppContentComponent implements OnInit, OnChanges {
    @Output() loggedIn = new EventEmitter();
    @Input() isLoggedIn: boolean;
    user: User = {
        firstName: 'Ahsan',
        lastName: 'Ayaz'
    };
    constructor() {}

    ngOnInit() {
        this.isLoggedIn = false;
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes?.isLoggedIn) {
            this.isLoggedIn = changes.isLoggedIn.currentValue;
        }
    }

    login() {
        this.isLoggedIn = true;
        this.loggedIn.emit(this.isLoggedIn);
    }

    logout() {
        this.isLoggedIn = false;
        this.loggedIn.emit(this.isLoggedIn);
    }
}
