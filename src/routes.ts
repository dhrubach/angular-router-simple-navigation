import { Route } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { CourseDevelopmentComponent } from './components/course-development/course-development.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CoursesComponent} from './components/courses/courses.component';
import { HomeComponent } from './components/home/home.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

export const routes: Route[] = [
	{ path: 'home', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{
		path: 'courses',
		component: CoursesComponent,
		children: [
			{ path: ':id', component: CourseDevelopmentComponent},
			{ path: '', component: CourseListComponent},	// nested route
			{ path: ':id', outlet: 'sidemenu', component: SideMenuComponent},
			{ path: '', outlet: 'sidemenu', component: SideMenuComponent},	// auxillary nested route
		],
	},
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: '**', redirectTo: '/home', pathMatch: 'full'},
];
