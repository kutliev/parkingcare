import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SpotcardComponent } from './spotcard/spotcard.component';

const appRoutes: Routes = [
    { path: '', component: DashboardComponent },
	{ path: 'spots', component: SpotcardComponent }, 
	{ path: 'spots/:slug', component: SpotcardComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);