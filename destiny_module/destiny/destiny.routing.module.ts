import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DestinyLookupViewComponent } from './views/destiny-lookup-view/destiny-lookup-view.component';
import { DestinyEventsViewComponent } from './views/destiny-events-view/destiny-events-view.component';
import { DestinyComponent } from './destiny.component';
import { AuthGuard } from '@ascendant/core';
import { DestinyRosterComponent } from './components/destiny-roster/destiny-roster.component';
import { DestinyLeaderboardsComponent } from './components/destiny-leaderboards/destiny-leaderboards.component';

const routes: Routes = [
    {
        path: '',
        component: DestinyComponent,
        children: [
            {
                path: '',
                component: DestinyRosterComponent
            },
            {
                path: 'roster/:destinyId/:bungieId',
                component: DestinyRosterComponent
            },
            {
                path: 'leaderboards',
                component: DestinyLeaderboardsComponent
            },
            {
                path: 'lookup',
                component: DestinyLookupViewComponent
            },
            {
                path: 'events',
                component: DestinyEventsViewComponent,
                canActivate: [AuthGuard]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DestinyRoutingModule { }
