import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Course } from './../../models/course.model';

@Component({
	selector: '[course-detail]',
	template: require('./course-detail.template.html'),
})
export class CourseDetailComponent implements OnDestroy, OnInit {

	private title: string;
	private longDescription: string;
	private resolvedDataSubscription: Subscription;

	constructor(private route: ActivatedRoute, private router: Router) { }

	public ngOnInit(): void {
		this.resolvedDataSubscription = this.route.data
			.subscribe((data: { course: Course }) => {
				this.title = data.course.title;
				this.longDescription = data.course.longDescription;
			});

		// console.log(this.route.data && (this.route.data as BehaviorSubject<Data>).observers.length);
	}

	public ngOnDestroy(): void {
		this.resolvedDataSubscription.unsubscribe();
	}

	private navigateBack(): void {
		this.router.navigate(['/courses']);
	}

}
