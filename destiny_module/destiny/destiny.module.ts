import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinyComponent } from './destiny.component';
import { DestinyLookupViewComponent } from './views/destiny-lookup-view/destiny-lookup-view.component';
import { DestinyEventsViewComponent } from './views/destiny-events-view/destiny-events-view.component';
import { DestinyRoutingModule } from './destiny.routing.module';
import { MaterialModule } from '@ascendant/material';
import { ComponentsModule } from '@ascendant/components';
import { EventsModule } from '@ascendant/events';
import { DestinyLeaderboardsComponent } from './components/destiny-leaderboards/destiny-leaderboards.component';
import { DestinyLookupComponent } from './components/destiny-lookup/destiny-lookup.component';
import { DestinyRosterComponent } from './components/destiny-roster/destiny-roster.component';
import { DestinyStatsComponent } from './components/destiny-stats/destiny-stats.component';
import { DestinyProfileComponent } from './components/destiny-profile/destiny-profile.component';
import { CoreModule } from '@ascendant/core';
import { DestinyLeaderboardComponent } from './components/destiny-leaderboard/destiny-leaderboard.component';

@NgModule({
    declarations: [
        DestinyLookupViewComponent,
        DestinyEventsViewComponent,
        DestinyComponent,
        DestinyLeaderboardsComponent,
        DestinyLookupComponent,
        DestinyRosterComponent,
        DestinyStatsComponent,
        DestinyProfileComponent,
        DestinyLeaderboardComponent
    ],
    imports: [
        CommonModule,
        DestinyRoutingModule,
        MaterialModule,
        ComponentsModule,
        EventsModule,
        CoreModule
    ],
    exports: [
        DestinyLookupComponent
    ]
})
export class DestinyModule {}