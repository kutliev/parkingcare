import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SpotcardComponent } from './spotcard/spotcard.component';
import { SpotcardeditComponent } from './spotcardedit/spotcardedit.component';
import { EventcardeditComponent } from './eventcardedit/eventcardedit.component';

const appRoutes: Routes = [
    { path: '', component: DashboardComponent },
	{ path: 'spots', component: SpotcardComponent }, 
	{ path: 'spots/:spot_slug', component: SpotcardComponent },
	{ path: 'spots/:spot_slug/edit', component: SpotcardeditComponent },
	{ path: 'spots/:spot_slug/addevent', component: EventcardeditComponent },
	{ path: 'createspot', component: SpotcardeditComponent }, 
	{ path: 'spotevents/:event_slug/edit', component: EventcardeditComponent },
	{ path: 'refresh-dashboard', redirectTo: '' },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);