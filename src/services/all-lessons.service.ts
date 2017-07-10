import { Injectable } from '@angular/core';

import { Lesson } from './../models/lesson.model';

@Injectable()
export class AllLessonsListService {
	private lessons: Lesson[];

	constructor() {
		this.lessons = [
			{
				name: 'Architecture',
				numberOfLessons: 10,
				paid: 'N',
			},
			{
				name: 'Template & Binding',
				numberOfLessons: 12,
				paid: 'N',
			},
			{
				name: 'Routing',
				numberOfLessons: 25,
				paid: 'Y',
			},
			{
				name: 'Dependency Injection',
				numberOfLessons: 15,
				paid: 'Y',
			},
			{
				name: 'Testing',
				numberOfLessons: 10,
				paid: 'N',
			},
		];
	}

	public getLessons(): Lesson[] {
		return this.lessons;
	}
}
