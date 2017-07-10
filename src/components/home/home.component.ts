import { Component } from '@angular/core';

import { Lesson } from './../../models/lesson.model';
import { AllLessonsListService } from './../../services/all-lessons.service';

@Component({
	providers: [AllLessonsListService],
	selector: 'home',
	template: require('./home.template.html'),
})
export class HomeComponent {

	constructor(private lesssonService: AllLessonsListService) {

	}

	public getAllLessons(): Lesson[] {
		return this.lesssonService.getLessons();
	}
}
