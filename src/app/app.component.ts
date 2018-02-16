import { Component, OnInit } from '@angular/core';
import { TeamService } from './team/team.service';
import { InfoService } from './info/info.service';
import { ActivatedRoute } from '@angular/router';
import { ITeam } from './team/team';
import { IInfo } from './info/info';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

	teams: ITeam[];
	info: IInfo;
	errorMessage: string;
	constructor (private _teamService: TeamService, private _infoService: InfoService, private _route: ActivatedRoute) {
		//console.log('year:' + this._route.snapshot.params['year']);
	}

	ngOnInit(): void {
		const self = this;
		self._route.data.subscribe(
			data => {
				self.info = data['info'];
				console.log(self.info);
				self._teamService.getTeams(self.info.year, self.info.scoresWeek).subscribe(
					data => {
						self.teams = data;
						console.log(self.teams);
					},
					error => self.errorMessage = <any>error
				);
			},
			error => self.errorMessage = <any>error
		);
	}
}
