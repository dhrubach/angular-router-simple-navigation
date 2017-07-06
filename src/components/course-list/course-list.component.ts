import { Component } from '@angular/core';

import { Course } from './../../models/course.model';
import { CourseListService } from './../../services/course-list.service';

@Component({
	selector: 'course-list',
	template: require('./course-list.template.html'),
})
export class CourseListComponent {

	constructor(private courseListService: CourseListService) { }

	public getCourses(): Course[] {
		return this.courseListService.getCourses();
	}
}
