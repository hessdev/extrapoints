import { Component, Input, OnInit } from '@angular/core';
import { IInfo } from '../info/info';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
	public isCollapsed = false;
	info: IInfo;

	ngOnInit() {
		console.log(this.info);
	}
}
