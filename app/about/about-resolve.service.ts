import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';

// This resolve service permit us to nt show blank page until data is loaded from http service

@Injectable()
export class AboutUserResolve implements Resolve<User> {

    constructor(private service: UserService) {};

    resolve(route: ActivatedRouteSnapshot) {
        return this.service.getUsers().then(users => users);
    }

}