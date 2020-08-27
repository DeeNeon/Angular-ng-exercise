import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './types';
import { UsersListService } from './users-list.service';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
    usersList$: Observable<IUser[]>;
    constructor(private service: UsersListService) {}

    ngOnInit(): void {
        this.usersList$ = this.service.getUsers();
    }

    track(index, item: IUser) {
        return item.id;
    }
}
