import { Component } from '@angular/core';

export class User {
    id: number;
    name: string;
    username: string;
    avatar: string;
}
const users : User[] = [
    {id:1,name:'Danilo',username:'danilodelfio', avatar:'https://pbs.twimg.com/profile_images/739164110462550016/DYUAlA14.jpg'},
    {id:1,name:'Digital Trends',username:'DigitalTrends', avatar:'https://pbs.twimg.com/profile_images/773261989539786753/HrKN3Sir.jpg'},
    {id:1,name:'Quote',username:'quotecanleadyou', avatar:'https://pbs.twimg.com/profile_images/461811277875007490/aKuN_jbW.jpeg'}
]

@Component ({
    selector:'about-page',
    styles: [`
        .profile-card {
            background: #f3f3f3;
            border-radius: 4px;
            padding: 30px;
            text-align: center;
        }
        .profile-card img {
            max-width : 50%;
            margin: 15px auto;
        }
    `],
    template: `
        <div class="row" *ngIf="users">
            <div class="col-sm-4" *ngFor="let user of users">
                <div class="profile-card" [routerLink]="['/about', user.username]">
                    <img [src]="user.avatar" class="img-responsive img-circle">
                    <h2>{{user.name}}</h2>
                    <p><a href="https://twitter.com/{{user.username}}">{{user.username}}</a></p>
                </div>
            </div>
        </div>
    `
})
export class AboutComponent {
    users : User[] = users;
}