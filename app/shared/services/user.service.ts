import { Injectable } from '@angular/core';
import { User } from '../models/user'


const usersPromise :Promise< User[]> = Promise.resolve([
    {id:1,name:'Danilo',username:'danilodelfio', avatar:'https://pbs.twimg.com/profile_images/739164110462550016/DYUAlA14.jpg'},
    {id:1,name:'Digital Trends',username:'DigitalTrends', avatar:'https://pbs.twimg.com/profile_images/773261989539786753/HrKN3Sir.jpg'},
    {id:1,name:'Holly Lloyd',username:'hollylawly', avatar:'https://pbs.twimg.com/profile_images/721918869821005824/2qT_RY5M.jpg'}
]);

@Injectable()
export class UserService {
    getUsers() {
        return usersPromise;
    }

    getUser(username)  {
        return usersPromise.then(users => users.find(user => user.username === username));
        /*let user = usersPromise.then(users =>{
            return users.find(user => {
                return user.username === username;
            })
        })*/
    }
}