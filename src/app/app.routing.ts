import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SpotcardComponent } from './spotcard/spotcard.component';
import { SpotcardeditComponent } from './spotcardedit/spotcardedit.component';

const appRoutes: Routes = [
    { path: '', component: DashboardComponent },
	{ path: 'spots', component: SpotcardComponent }, 
	{ path: 'spots/:slug', component: SpotcardComponent },
	{ path: 'spots/:slug/edit', component: SpotcardeditComponent },
	{ path: 'createspot', component: SpotcardeditComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);