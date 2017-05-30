import { Component, Input } from '@angular/core';

import { Course } from './../../models/course.model';

@Component({
	selector: '[course-detail]',
	template: require('./course-detail.template.html'),
})
export class CourseDetailComponent {

	@Input() public course: Course;

}
