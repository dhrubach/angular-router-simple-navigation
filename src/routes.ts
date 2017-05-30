import { Route } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { CoursesComponent} from './components/courses/courses.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Route[] = [
	{ path: 'home', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'courses', component: CoursesComponent },
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: '**', redirectTo: '/home', pathMatch: 'full'},
];
