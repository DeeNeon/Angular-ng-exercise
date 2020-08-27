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
    selector: 'ng-e-app-header',
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit, OnChanges {
    @Output() loggedIn = new EventEmitter();
    @Input() isLoggedIn: boolean;
    user: User = {
        firstName: 'Ahsan',
        lastName: 'Ayaz'
    };

    ngOnChanges(changes: SimpleChanges) {
        if (changes?.isLoggedIn) {
            this.isLoggedIn = changes.isLoggedIn.currentValue;
        }
    }

    ngOnInit() {
        this.isLoggedIn = false;
    }

    login() {
        this.isLoggedIn = true;
        this.loggedIn.emit(this.isLoggedIn);
    }

    signup() {
        this.isLoggedIn = true;
        this.loggedIn.emit(this.isLoggedIn);
    }

    logout() {
        this.isLoggedIn = false;
        this.loggedIn.emit(this.isLoggedIn);
    }
}
