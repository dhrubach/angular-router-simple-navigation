import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import {
	AboutComponent,
	CourseDetailComponent,
	CourseDevelopmentComponent,
	CourseListComponent,
	CoursesComponent,
	HomeComponent,
	RouterNavigationAppComponent,
	SideMenuComponent,
	TopMenuComponent,
} from './components';

import { routes } from './routes';

@NgModule({
	bootstrap: [RouterNavigationAppComponent],
	declarations: [
		RouterNavigationAppComponent,
		TopMenuComponent,
		AboutComponent,
		HomeComponent,
		CoursesComponent,
		CourseDetailComponent,
		CourseListComponent,
		SideMenuComponent,
		CourseDevelopmentComponent,
	],
	imports: [
		BrowserModule,
		HttpModule,
		RouterModule.forRoot(routes, {
			useHash: true,
		}),
	],
	providers: [],
})
export class MainModule { }
