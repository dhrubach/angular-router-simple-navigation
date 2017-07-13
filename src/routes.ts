import { Route } from '@angular/router';

import { AllLessonsAuthGuard } from './services/all-lessons-guard.service';
import { CourseResolver } from './services/course-resolver.service';

import {
	CourseComponent,
	CourseDetailComponent,
	CourseListComponent,
	CoursesComponent,
	HomeComponent,
	LaunchDialogComponent,
	RouterNavigationAppComponent,
	SideMenuComponent,
	TopMenuComponent,
} from './components';

const components = [
	CourseComponent,
	CourseDetailComponent,
	CourseListComponent,
	CoursesComponent,
	HomeComponent,
	LaunchDialogComponent,
	RouterNavigationAppComponent,
	SideMenuComponent,
	TopMenuComponent,
];

/* tslint:disable object-literal-sort-keys */
const routes: Route[] = [
	{
		path: 'home',
		component: HomeComponent,
		children: [
			{
				path: 'launch',
				component: LaunchDialogComponent,
				canActivate: [AllLessonsAuthGuard],
			},
		],
	},
	{
		path: 'courses',
		component: CoursesComponent,
		children: [
			{
				path: ':id',
				component: CourseDetailComponent,
				resolve: {
					course: CourseResolver,
				},
			},
			{ path: '', component: CourseListComponent },	// nested route
			{ path: ':id', outlet: 'sidemenu', component: SideMenuComponent },
			{ path: '', outlet: 'sidemenu', component: SideMenuComponent },	// auxillary nested route
		],
	},
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: '**', redirectTo: '/home', pathMatch: 'full' },
];
/* tslint:enable object-literal-sort-keys */

export { components, routes };
