import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AboutComponent } from './about.component';
import { AboutUserComponent } from './about-user.component';
import { AboutSectionComponent } from './about-section.component';
import { AboutUserResolve } from './about-resolve.service';

const aboutRoutes: Routes = [
     { 
         path:'',
         component : AboutSectionComponent,
         children : [
             { 
                path:'',
                component: AboutComponent,
                resolve : {                                 // the router will grab all the information
                    users : AboutUserResolve    // from the resolve and then it routes  to
                }                                               // this route.
            },
            {
                path: ':username',
                component : AboutUserComponent
            }
         ]
     }
];

export const aboutRouting: ModuleWithProviders = RouterModule.forChild(aboutRoutes); 