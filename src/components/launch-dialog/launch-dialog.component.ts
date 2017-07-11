import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
	selector: 'launch-course-modal',
	styles: ['.fade.in { opacity: 1; }'],
	template: require('./launch-dialog.template.html'),
})
export class LaunchDialogComponent {

	@ViewChild('childModal') private modal: ModalDirective;

	public showModal(): void {
		this.modal.show();
	}

	public hideModal(): void {
		this.modal.hide();
	}
}
