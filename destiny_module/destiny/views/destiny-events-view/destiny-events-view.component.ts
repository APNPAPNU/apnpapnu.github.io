import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BasicInfoService, Destroyer, SEOService, GameTitles } from '@ascendant/core';
import { AscendantEvent, EventsService } from '@ascendant/events';
import { BehaviorSubject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
    selector: 'asc-destiny-events-view',
    templateUrl: './destiny-events-view.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DestinyEventsViewComponent extends Destroyer implements OnInit {

    public d2Events: BehaviorSubject<AscendantEvent[]> = new BehaviorSubject<AscendantEvent[]>(null);

    constructor(
        public info: BasicInfoService,
        public seo: SEOService,
        private events: EventsService
    ) {
        super();
        this.seo.updateTitle(`${GameTitles.DESTINY} Events`);
        this.seo.updateDescription(`${info.name} events for ${GameTitles.DESTINY}`);
    }

    ngOnInit() {
        this.events.upcomingEvents.pipe(
            map(events =>
                events.filter(event => event.game === GameTitles.DESTINY)
            ),
            takeUntil(this.destroy$)
        ).subscribe((events: AscendantEvent[]) => {
            this.d2Events.next(events);
        });
    }

}
