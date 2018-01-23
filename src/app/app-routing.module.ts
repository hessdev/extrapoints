import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { InfoResolver } from './info/info-resolver.service';

@NgModule({
	imports: [
		RouterModule.forRoot([
			{
				path: 'home',
				component: AppComponent,
				resolve: { info: InfoResolver }
			},
			{ path: '', redirectTo: 'home', pathMatch: 'full' },
			{ path: '**', component: PageNotFoundComponent }
		])
	],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }
