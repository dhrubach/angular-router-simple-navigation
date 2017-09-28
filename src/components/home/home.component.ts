import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';

import { Lesson } from './../../models/lesson.model';
import { AllLessonsListService } from './../../services/all-lessons.service';

@Component({
	providers: [AllLessonsListService],
	selector: 'home',
	template: require('./home.template.html'),
})
export class HomeComponent {

	constructor(
		private lesssonService: AllLessonsListService,
		private route: ActivatedRoute,
		private router: Router,
	) { }

	public getAllLessons(): Lesson[] {
		return this.lesssonService.getLessons();
	}

	private openLaunchDialog(lesson: string): void {
		this.router.navigate([{
			outlets: {
				launch: 'launch'
			}
		}], { relativeTo: this.route });
	}
}
