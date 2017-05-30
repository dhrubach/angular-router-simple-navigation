import { Route } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CoursesComponent} from './components/courses/courses.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Route[] = [
	{ path: 'home', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{
		path: 'courses',
		component: CoursesComponent,
		children: [
			{ path: '', component: CourseListComponent},
		],
	},
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: '**', redirectTo: '/home', pathMatch: 'full'},
];
