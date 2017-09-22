import { Routes, RouterModule } from '@angular/router';

// our module routes
import { ScenarioEntryComponent } from '../../features/scenario-entry/scenario-entry.component';
import { MapCollectionComponent }  from '../../features/map-collection/map-collection.component';
import { SourceComponent } from '../../features/admin/source/source.component';
import { LoginComponent } from '../../features/admin/login/login.component';



const appRoutes: Routes = [
    { path: 'home', component: SourceComponent },
    { path: 'scenarioentry', component: ScenarioEntryComponent },
    { path: 'mapcollection', component: MapCollectionComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', component: SourceComponent }// will show when routing fails
];

export const appRoutingProviders: any[] = [
];

export const routing = RouterModule.forRoot(appRoutes);

