import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CourseSubcategoryService } from './../../services/course-subcategory.service';

@Component({
	providers: [CourseSubcategoryService],
	selector: 'side-menu',
	template: require('./side-menu.template.html'),
})
export class SideMenuComponent implements OnInit {

	public sideMenuListItems: string[];

	constructor(private route: ActivatedRoute, private courseSubcategoryService: CourseSubcategoryService) {
		this.sideMenuListItems = [];
	}

	public ngOnInit(): void {
		this.route.params.subscribe(
			(params) => {
				this.sideMenuListItems = this.courseSubcategoryService.get(params.id);
			});
	}
}
