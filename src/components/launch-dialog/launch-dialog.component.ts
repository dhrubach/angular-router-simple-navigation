import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

import { slideInDownAnimation } from './animations';

@Component({
	animations: [slideInDownAnimation],
	template: require('./launch-dialog.template.html'),
})
export class LaunchDialogComponent {

	@HostBinding('@routeAnimation') private routeAnimation = true;
	@HostBinding('style.display') private display = 'block';
	@HostBinding('style.position') private position = 'absolute';

	constructor(private router: Router) { }

}
