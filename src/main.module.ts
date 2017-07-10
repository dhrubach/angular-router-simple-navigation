import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { RouterNavigationAppComponent } from './components/app/app.component';
import { CourseListService } from './services/course-list.service';
import { CourseResolver } from './services/course-resolver.service';

import { components, routes } from './routes';

@NgModule({
	bootstrap: [RouterNavigationAppComponent],
	declarations: [
		...components,
	],
	imports: [
		BrowserAnimationsModule,
		BrowserModule,
		HttpModule,
		RouterModule.forRoot(routes, {
			enableTracing: false,
			useHash: true,
		}),
	],
	providers: [CourseListService, CourseResolver],
})
export class MainModule { }
