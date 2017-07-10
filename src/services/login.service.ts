import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

	constructor() { }

	public isAdmin(): boolean {
		const adminSelector: number = Math.floor(Math.random() * 10);

		return adminSelector > 4;
	}
}
