import { Routes } from '@angular/router';
 import { GroupRoutesComponent } from './component/group-routes/group-routes.component';
export const routes: Routes = [
    {
        path: '',
        component: GroupRoutesComponent,
        children: [
        //   { path: 'aboutus', component: AboutUsComponent, title: 'About Us' },
]
    }]