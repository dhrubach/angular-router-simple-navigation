import { Injectable } from '@angular/core';

@Injectable()
export class CourseSubcategoryService {

	public get(category: string = ''): string[] {
		let subcategories: string[] = null;

		switch (category) {
			case 'development':
			case 'Development':
				subcategories = [
					'Coding',
					'Unit Testing',
					'Build',
					'Deployment',
				];
				break;
			default :
				subcategories = [
					'Development',
					'IT & Software',
					'Office Productivity',
					'Photography',
					'Music',
					'Sports',
				];
		}

		return subcategories;
	}

}
