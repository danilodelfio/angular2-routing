import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    styles : [`
        img   {
            max-width : 300px;
            margin : 20px  auto;
        }
    `],
    template : `
        <div class="jumbotron text-center" *ngIf="user">
            <h1>{{user.name}} {{user.username}}</h1>

            <img [src]="user.avatar" class="img-responsive img-circle">
        </div>
    `
})
export class AboutUserComponent implements OnInit {
    user;
    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {
        let username = this.route.snapshot.params['username'];
        this.user = users.find( function ( user ){
            return user.username === username;
        });
    }
}