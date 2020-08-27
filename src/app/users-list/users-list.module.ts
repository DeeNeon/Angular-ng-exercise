import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersListComponent } from './users-list.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: UsersListComponent
            },
            {
                path: ':id',
                component: UserDetailComponent,
                data: {
                    title: 'User Details'
                }
            }
        ]
    }
];

@NgModule({
    declarations: [UserDetailComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersListModule {}
