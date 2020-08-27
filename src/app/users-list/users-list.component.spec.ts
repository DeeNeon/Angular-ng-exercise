import { createSpyFromClass } from 'jasmine-auto-spies';
import { UsersListComponent } from './users-list.component';
import { UsersListService } from './users-list.service';
import { UsersServiceMock } from './users.service.mock';

describe('UsersListComponent', () => {
    let component: UsersListComponent;
    const serviceSpy = createSpyFromClass(UsersListService);

    beforeEach(() => {
        component = new UsersListComponent(<UsersListService>(<unknown>serviceSpy));
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should ngOnInit', () => {
        spyOn(component, 'ngOnInit');

        component.ngOnInit();

        expect(component.ngOnInit).toHaveBeenCalled();
    });

    it('should trackBy', () => {
        const user = UsersServiceMock.getUsers()[0];
        expect(component.track(1, user)).toEqual(user.id);
    });
});
