import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { routing } from './app.routing';

import { DataService } from './services/data.service';
import { Settings } from './models/settings';
import { SpotlistComponent } from './spotlist/spotlist.component';
import { EventlistComponent } from './eventlist/eventlist.component';
import { SpotcardComponent } from './spotcard/spotcard.component';
import { EventcardComponent } from './eventcard/eventcard.component';
import { SpotcardeditComponent } from './spotcardedit/spotcardedit.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SpotlistComponent,
    EventlistComponent,
    SpotcardComponent,
    EventcardComponent,
    SpotcardeditComponent
  ],
  imports: [
    BrowserModule,
	  HttpModule,
	  routing,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
  	DataService,
  	Settings,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
