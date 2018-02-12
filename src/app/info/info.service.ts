import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { IInfo } from './info';

@Injectable()
export class InfoService {
	private _infoUrl = 'http://extptsapi.hess.com/info';

	constructor(private _http: HttpClient) { }

	getInfo(year: number): Observable<IInfo> {
		const now = new Date();
		if ( isNaN(year) || (year < 1996 || year > now.getFullYear()) ) {
			year = (now.getMonth() >= 8) ? now.getFullYear() : now.getFullYear() - 1;
		}
		const url = `${this._infoUrl}/${year}`;
		return this._http.get<IInfo>(url)
			.do(data => console.log(data))
			.catch(this.handleError);
	}

	private handleError(err: HttpErrorResponse) {
		console.error(err.message);
		return Observable.throw(err.message);
	}
}
