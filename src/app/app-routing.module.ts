import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
    {
        path: 'landing',
        component: LandingComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'users-list',
        data: {
            title: "User's List"
        },
        loadChildren: async () => (await import('./users-list/users-list.module')).UsersListModule
    },
    {
        path: '**',
        redirectTo: 'users-list'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
