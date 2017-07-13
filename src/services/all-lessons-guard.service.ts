import { Component, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AllLessonsAuthGuard implements CanActivate {

	public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		return true;
	}
}
