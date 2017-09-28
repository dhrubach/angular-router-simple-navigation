import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { ModalModule } from 'ngx-bootstrap';

import { RouterNavigationAppComponent } from './components/app/app.component';
import { AllLessonsAuthGuard } from './services/all-lessons-guard.service';
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
		ModalModule.forRoot(),
		RouterModule.forRoot(routes, {
			enableTracing: false,
			useHash: true,
		}),
	],
	providers: [AllLessonsAuthGuard, CourseListService, CourseResolver],
})
export class MainModule { }
