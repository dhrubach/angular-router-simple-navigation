import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Course } from './../../models/course.model';

@Component({
	selector: '[course]',
	template: require('./course.template.html'),
})
export class CourseComponent {

	@Input() public course: Course;

	constructor(private route: ActivatedRoute, private router: Router) { }

	public navigate(path: string): void {
		this.router.navigate([{
			outlets: {
				primary: path,
				sidemenu: path,
			},
		}], { relativeTo: this.route });
	}

}
