import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import {RouterNavigationAppComponent} from './components/app/app.component';

import { components, routes } from './routes';

@NgModule({
	bootstrap: [RouterNavigationAppComponent],
	declarations: [
		...components,
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
