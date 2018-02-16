import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { InfoService } from './info.service';
import { IInfo } from './info';

@Injectable()
export class InfoResolver implements Resolve<IInfo> {

	constructor(private _infoService: InfoService, private _router: Router) { }

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IInfo> {
		let year = route.params['year'];
		const now = new Date();
		if ( isNaN(year) || (year < 1996 || year > now.getFullYear()) ) {
			year = (now.getMonth() >= 8) ? now.getFullYear() : now.getFullYear() - 1;
		}
		return this._infoService.getInfo(+year)
			.map(info => {
				console.log(info);
				if (info) {
					return info;
				}
				console.log(`Info was not found: ${year}`);
				this._router.navigate(['/home']);
				return null;
			})
			.catch(error => {
				console.log(`Retrieval error: ${error}`);
				this._router.navigate(['/home']);
				return Observable.of(null);
			});
	}
}
