import { Injectable } from '@angular/core';

import { Course } from './../models/course.model';

@Injectable()
export class CourseListService {
	public courses: Course[];

	constructor() {
		this.courses = [
			{
				description: `
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum nesciunt,
					porro molestias quis ipsa et modi nostrum, ipsum deleniti minus.
				`,
				subtitle: 'Lorem ipsum dolor sit amet.',
				title: 'Development',
			},
			{
				description: `
					Labore quidem dignissimos ratione. Incidunt dolorum similique possimus architecto
					ullam tempora rerum quaerat soluta odio asperiores, dolores, accusamus iste dolorem excepturi.
				`,
				subtitle: 'quis ipsa et modi nostrum',
				title: 'IT & Software',
			},
			{
				description: `
					Cum provident, blanditiis minus ipsa at asperiores adipisci neque harum similique ea
					temporibus sint obcaecati consequuntur, maxime sapiente? Neque eius, dolorum corrupti qui.
				`,
				subtitle: 'Lorem ipsum dolor sit amet.',
				title: 'Office Productivity',
			},
		];
	}

	public getCourses(): Course[] {
		return this.courses;
	}

}
