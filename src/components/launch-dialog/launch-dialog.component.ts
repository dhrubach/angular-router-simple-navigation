import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'launch-course-modal',
	styles: ['.fade.in { opacity: 1; }'],
	template: require('./launch-dialog.template.html'),
})
export class LaunchDialogComponent implements AfterViewInit, OnInit {

	@ViewChild('childModal') private modal: ModalDirective;

	private modalTitle: string;

	constructor(private router: Router, private route: ActivatedRoute) {
		this.modalTitle = 'Angular Router';
	}

	public ngOnInit(): void {
		this.route.paramMap
			.switchMap((params: ParamMap) => {
				return params.get('id');
			});
	}

	public ngAfterViewInit(): void {
		this.modal.show();
	}

	private hideModal(): void {
		this.modal.hide();
		this.router.navigate([{
			outlets: {
				primary: 'home',
				launch: null,
			},
		}]);
	}

	private showModal(modalTitle: string): void {
		this.modal.show();
	}
}
