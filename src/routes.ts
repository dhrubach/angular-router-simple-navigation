import { Route } from '@angular/router';

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
	{ path: 'home', component: HomeComponent },
	{ path: 'launch', outlet: 'dialog', component: LaunchDialogComponent },
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
