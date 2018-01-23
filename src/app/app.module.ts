import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { TeamService } from './team/team.service';
import { InfoService } from './info/info.service';
import { InfoResolver } from './info/info-resolver.service';
import { TopScoresComponent } from './top-scores/top-scores.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		TopScoresComponent,
		PageNotFoundComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		RouterModule,
		NgbModule.forRoot()
	],
	providers: [
		InfoService,
		TeamService,
		InfoResolver
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
