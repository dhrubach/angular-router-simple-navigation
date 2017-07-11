import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';

import { Lesson } from './../../models/lesson.model';
import { AllLessonsListService } from './../../services/all-lessons.service';
import { LaunchDialogComponent } from '../launch-dialog/launch-dialog.component';

@Component({
	providers: [AllLessonsListService],
	selector: 'home',
	template: require('./home.template.html'),
})
export class HomeComponent {

	@ViewChild(LaunchDialogComponent)
	private dialogComponent: LaunchDialogComponent;

	constructor(
		private lesssonService: AllLessonsListService,
		private route: ActivatedRoute,
		private router: Router,
	) { }

	public getAllLessons(): Lesson[] {
		return this.lesssonService.getLessons();
	}

	private openLaunchDialog(): void {
		this.dialogComponent.showModal();
	}
}
