import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
    declarations: [AppComponent, HomeComponent, LandingComponent, UsersListComponent],
    imports: [BrowserModule, AppRoutingModule, CoreModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
