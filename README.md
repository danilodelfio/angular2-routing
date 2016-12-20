# Angular 2 Routing

This project is for having a starting point for AngularJS 2 and Typescript and with the routing system 
in a simple way. 

Takes a lot of cues from the Angular [quickstart](https://angular.io/docs/ts/latest/quickstart.html).

> This is a great starter for getting straight to the Angular 2 and its routing system

## Router Features

- **Route to different pages**: Base routing system for routing through pages
- **Route with parameters**: Passing parameter from different Components 
- **Child Routes**: Routes through sub-menu
- **Lazy Loading**: Load resources when we visit the page (we want to load them incrementally)
- **Resolve**: We can call some service into resolve attribute of routing system for not to show blank page until data is available and for kick back user to another view if it's not possible to resolve data. 
- **Handle things (auth) before/after routes**: Allow users to navigate to page or to not to leave page if they haven't yet finished to work on it (example: update user profile)

## Requirements

- [node and npm](https://nodejs.org)

## Installation

- Clone the repo: `git clone git@github.com:danilodelfio/angular2-routing`
- Choose the new directory: `cd angular2-routing`
- Install dependencies: `npm install`
- Start the app: `npm start`
- View the app: <http://localhost:3000>

## Usage

- The Angular application is found in the `app/` directory

## Caveats

- This is a very basic starter. If you want to use this in production, you're going to need to build out a lot more parts. Parts like:
- Templates are referenced absolutely, which doesn't scale well.
    + You'd want to have your build system help with referencing templates relatively. Better to not absolutely reference them as they could get lost in build systems in larger apps.

## More Production Ready Setup

- Use the [Angular CLI](https://cli.angular.io/)