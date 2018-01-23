import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { ITeam } from './team';

@Injectable()
export class TeamService {
	private _teamUrl = 'http://extptsapi.hess.com/teams';

	constructor(private _http: HttpClient) { }

	getTeams(_year: number, _week: number): Observable<ITeam[]> {
		let teamUrl = (_week < 10) ? this._teamUrl+'/'+_year+'/week0'+_week : this._teamUrl+'/'+_year+'/week'+_week;
		return this._http.get<ITeam[]>(teamUrl)
			.do(data => console.log(data))
			.catch(this.handleError);
	}

	private handleError(err: HttpErrorResponse) {
		console.error(err.message);
		return Observable.throw(err.message);
	}
}
