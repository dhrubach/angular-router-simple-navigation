import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Course } from './../../models/course.model';

@Component({
	selector: '[course-detail]',
	template: require('./course-detail.template.html'),
})
export class CourseDetailComponent implements OnInit {

	private title: string;
	private longDescription: string;

	constructor(private route: ActivatedRoute) { }

	public ngOnInit(): void {
		this.route.data
			.subscribe((data: { course: Course }) => {
				this.title = data.course.title;
				this.longDescription = data.course.longDescription;
			});
	}
}
