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
				longDescription: `
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ratione
					recusandae doloribus distinctio minus quos quidem commodi iure adipisci
					dolorum rerum quia dolores nisi harum ex perferendis vel facere accusamus
					unde, deserunt, corporis voluptates esse similique possimus eius. Temporibus
					praesentium ipsum voluptatibus deserunt natus laudantium quas eius fugiat.
					Iste modi, veritatis eos omnis iusto rem deleniti nihil quibusdam accusantium.
					Facere dignissimos consectetur expedita, natus, alias aspernatur, doloremque
					atque ipsam vero, suscipit ullam impedit repellat quia perferendis pariatur
					veniam deserunt odit soluta. Eum ipsum, doloremque dignissimos mollitia quam
					quidem, quia cupiditate? Ex nulla itaque nemo neque magnam in, aspernatur
					voluptatum. Quisquam.
				`,
				path: 'development',
				subtitle: 'Lorem ipsum dolor sit amet.',
				title: 'Development',
			},
			{
				description: `
					Labore quidem dignissimos ratione. Incidunt dolorum similique possimus architecto
					ullam tempora rerum quaerat soluta odio asperiores, dolores, accusamus iste dolorem excepturi.
				`,
				longDescription: `
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ratione
					recusandae doloribus distinctio minus quos quidem commodi iure adipisci
					dolorum rerum quia dolores nisi harum ex perferendis vel facere accusamus
					unde, deserunt, corporis voluptates esse similique possimus eius. Temporibus
					praesentium ipsum voluptatibus deserunt natus laudantium quas eius fugiat.
					Iste modi, veritatis eos omnis iusto rem deleniti nihil quibusdam accusantium.
					Facere dignissimos consectetur expedita, natus, alias aspernatur, doloremque
					atque ipsam vero, suscipit ullam impedit repellat quia perferendis pariatur
					veniam deserunt odit soluta. Eum ipsum, doloremque dignissimos mollitia quam
					quidem, quia cupiditate? Ex nulla itaque nemo neque magnam in, aspernatur
					voluptatum. Quisquam.
				`,
				path: 'itsoftware',
				subtitle: 'quis ipsa et modi nostrum',
				title: 'IT & Software',
			},
			{
				description: `
					Cum provident, blanditiis minus ipsa at asperiores adipisci neque harum similique ea
					temporibus sint obcaecati consequuntur, maxime sapiente? Neque eius, dolorum corrupti qui.
				`,
				longDescription: `
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ratione
					recusandae doloribus distinctio minus quos quidem commodi iure adipisci
					dolorum rerum quia dolores nisi harum ex perferendis vel facere accusamus
					unde, deserunt, corporis voluptates esse similique possimus eius. Temporibus
					praesentium ipsum voluptatibus deserunt natus laudantium quas eius fugiat.
					Iste modi, veritatis eos omnis iusto rem deleniti nihil quibusdam accusantium.
					Facere dignissimos consectetur expedita, natus, alias aspernatur, doloremque
					atque ipsam vero, suscipit ullam impedit repellat quia perferendis pariatur
					veniam deserunt odit soluta. Eum ipsum, doloremque dignissimos mollitia quam
					quidem, quia cupiditate? Ex nulla itaque nemo neque magnam in, aspernatur
					voluptatum. Quisquam.
				`,
				path: 'officeproductivity',
				subtitle: 'Lorem ipsum dolor sit amet.',
				title: 'Office Productivity',
			},
		];
	}

	public getCourses(): Course[] {
		return this.courses;
	}

}
