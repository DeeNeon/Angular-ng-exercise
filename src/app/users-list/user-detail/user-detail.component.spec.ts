import { tick } from '@angular/core/testing';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { createSpyFromClass } from 'jasmine-auto-spies';
import { UsersListService } from '../users-list.service';
import { UserDetailComponent } from './user-detail.component';

describe('UserDetailComponent', () => {
    let component: UserDetailComponent;
    const serviceSpy = createSpyFromClass(UsersListService);
    const routeSpy = createSpyFromClass(ActivatedRoute);

    beforeEach(() => {
        component = new UserDetailComponent(
            <UsersListService>(<unknown>serviceSpy),
            <ActivatedRoute>(<unknown>routeSpy)
        );
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should ngOnInit', () => {
        const paramMapMock = {
            id: '1'
        };
        routeSpy.snapshot = new ActivatedRouteSnapshot();
        spyOn(routeSpy.snapshot.paramMap, 'get').and.callFake(key => paramMapMock[key]);

        component.ngOnInit();

        expect(serviceSpy.getUserDetails.calls.argsFor(0)[0]).toEqual('1');
    });
});
