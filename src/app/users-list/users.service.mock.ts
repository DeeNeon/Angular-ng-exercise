import { IUser, IUserResponse } from './types';
import { UsersListFixture, UserDetailFixture } from './users.fixture';

export class UsersServiceMock {
    static getUsers(): IUser[] {
        return UsersListFixture;
    }

    static getUserDetails(): IUserResponse {
        return UserDetailFixture;
    }
}
