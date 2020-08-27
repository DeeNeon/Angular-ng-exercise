import { createSpyFromClass } from 'jasmine-auto-spies';
import { UsersListService } from './users-list.service';
import { HttpClient } from '@angular/common/http';
import { fakeAsync, tick } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { IUser, IUserResponse } from './types';
import { UsersServiceMock } from './users.service.mock';

describe('UsersListService', () => {
    let service: UsersListService;
    let httpClientSpy;

    beforeEach(() => {
        httpClientSpy = createSpyFromClass(HttpClient);
        service = new UsersListService(<HttpClient>(<unknown>httpClientSpy));
    });

    describe('getUserDetails', () => {
        it('should return a user details', fakeAsync(() => {
            let retrievedUser;
            const userMock: IUserResponse = UsersServiceMock.getUserDetails();

            httpClientSpy.get.and.returnValue(of(userMock));
            service.getUserDetails('1').subscribe(user => {
                retrievedUser = user;
            });
            tick();

            expect(retrievedUser).toEqual(userMock);
        }));

        it('should send any HTTP errors back to the caller', fakeAsync(() => {
            let isSuccess: boolean = false;
            let isError: boolean = false;
            httpClientSpy.get.and.returnValue(throwError('Error'));

            service.getUserDetails('1').subscribe({
                next: () => {
                    isSuccess = true;
                },
                error: () => {
                    isError = true;
                }
            });
            tick();

            expect(isSuccess).toBeFalsy();
            expect(isError).toBeTruthy();
        }));
    });
});
