import { Injectable } from '@angular/core';
import { Router,CanActivate,RouterStateSnapshot,ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthGuard implements CanActivate{
	constructor(private router: Router) {}
	canActivate(route: ActivatedRouteSnapshot,state:RouterStateSnapshot): Observable<boolean> | boolean{
		if( localStorage.getItem('IsLogin')) {
			return true;
		} 
		this.router.navigate(['/']);
		return false ;
	}
}