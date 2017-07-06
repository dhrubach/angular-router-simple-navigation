import { Injectable } from '@angular/core';

@Injectable()
export class CourseSubcategoryService {

	public get(category: string = ''): string[] {
		let subcategories: string[] = null;

		switch (category) {
			case 'development':
				subcategories = [
					'Coding',
					'Unit Testing',
					'Build',
					'Deployment',
				];
				break;
			case 'itsoftware':
				subcategories = [
					'Deployment',
					'Security',
					'Infrastructure',
					'Support',
				];
				break;
			case 'officeproductivity':
				subcategories = [
					'JIRA',
					'Confluence',
					'SCRUM',
				];
				break;
			default:
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
