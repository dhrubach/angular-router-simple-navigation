import { Component, OnInit } from '@angular/core';

import { Course } from './../../models/course.model';
import { CourseListService } from './../../services/course-list.service';

@Component({
	providers: [CourseListService],
	selector: 'course-list',
	template: require('./course-list.template.html'),
})
export class CourseListComponent {

	constructor(public courseListService: CourseListService) { }

	public getCourses(): Course[] {
		return this.courseListService.getCourses();
	}
}
