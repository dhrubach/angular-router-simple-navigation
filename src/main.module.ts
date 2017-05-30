import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import {
	AboutComponent,
	CourseDetailComponent,
	CourseListComponent,
	CoursesComponent,
	HomeComponent,
	RouterNavigationAppComponent,
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
