import { IsOpenPipe } from './pipes/pipes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { BrowserXhr } from '@angular/http';
import {CustExtBrowserXhr} from '../cust-ext-browser-xhr';
import {JsonpModule, Jsonp, Response} from '@angular/http';

import { AppComponent } from './app.component';
import { MapsComponent } from './maps/maps.component';
import { AgmCoreModule } from '@agm/core';
import { HomepageComponent } from './homepage/homepage.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { BusinessesComponent } from './businesses/businesses.component';
import { DetailsComponent } from './details/details.component';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RatingComponent } from './rating/rating.component';


@NgModule({
  declarations: [
    AppComponent,
    IsOpenPipe,
    MapsComponent,
    HomepageComponent,
    ChallengesComponent,
    BusinessesComponent,
    DetailsComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    JsonpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAY_alI2LupenkD1LKLTOzZI9yujH2ljJg'
    }),
    RouterModule.forRoot([
    {path: 'challenges', component: ChallengesComponent},
    {path: 'home', component: HomepageComponent},
    {path: 'businesses/:ctg', component: BusinessesComponent},
    {path: 'team', component: TeamComponent},
    {path: 'details/:id', component: DetailsComponent},
    {path: ' ', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]),
    NgbModule.forRoot(),
  ],
  providers: [{provide: BrowserXhr, useClass:CustExtBrowserXhr}],
  bootstrap: [AppComponent]
})
export class AppModule { }
