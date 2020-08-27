export interface IUser {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
    ad?: IAd;
}

export interface IUserResponse {
    data: IUser;
    ad: IAd;
}

export interface IAd {
    company: string;
    url: string;
    text: string;
}

export interface IUsersResponse {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: IUser[];
    ad: IAd;
}
