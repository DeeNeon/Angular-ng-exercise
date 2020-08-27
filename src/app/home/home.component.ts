import { Component } from '@angular/core';

@Component({
    selector: 'ng-e-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    isLoggedIn: boolean;

    userStatus(event: boolean) {
        this.isLoggedIn = event;
    }
}
