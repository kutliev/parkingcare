import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { routing } from './app.routing';

import { DataService } from './services/data.service';
import { Settings } from './models/settings';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
	HttpModule,
	routing,
  ],
  providers: [
  	DataService,
  	Settings,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
