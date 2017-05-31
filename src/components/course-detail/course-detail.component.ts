import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Course } from './../../models/course.model';

@Component({
	selector: '[course-detail]',
	template: require('./course-detail.template.html'),
})
export class CourseDetailComponent {

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
