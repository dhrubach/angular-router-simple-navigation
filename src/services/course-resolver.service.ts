import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	Resolve,
	Router,
	RouterStateSnapshot,
} from '@angular/router';

import { Course } from './../models/course.model';
import { CourseListService } from './course-list.service';

@Injectable()
export class CourseResolver implements Resolve<Course> {

	constructor(private courseListService: CourseListService, private router: Router) { }

	public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Course {
		const id = route.paramMap.get('id');
		const courseList = this.courseListService.getCourses();
		const selectedCourse = courseList.find((course) => {
			return course.path === id;
		});

		if (selectedCourse) {
			return selectedCourse;
		} else {
			this.router.navigate(['/courses']);
			return null;
		}
	}

}
