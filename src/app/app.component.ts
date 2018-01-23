import { Component } from '@angular/core';
import { TeamService } from './team/team.service';
import { InfoService } from './info/info.service';
import { ActivatedRoute } from '@angular/router';
import { ITeam } from './team/team';
import { IInfo } from './info/info';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {

	teams: ITeam[];
	info: IInfo;
	errorMessage: string;
	constructor (private _teamService: TeamService, private _infoService: InfoService, private _route: ActivatedRoute) {}

	ngOnInit(): void {
		var self = this;
		this._route.data.subscribe(
			data => {
				this.info = data['info'];
				self._teamService.getTeams(this.info.year, this.info.scoresWeek).subscribe(
					data => {
						this.teams = data;
						console.log(this.teams);
					},
					error => this.errorMessage = <any>error
				);
			}
		);
	}
}
