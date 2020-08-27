import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IUserResponse } from '../types';
import { UsersListService } from '../users-list.service';

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
    user$: Observable<IUserResponse>;
    constructor(private service: UsersListService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.user$ = this.service.getUserDetails(this.route.snapshot.paramMap.get('id'));
    }
}
