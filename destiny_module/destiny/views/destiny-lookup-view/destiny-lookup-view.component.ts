import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { BackdropComponent } from '@ascendant/components';
import { SEOService, GameTitles } from '@ascendant/core';
import { DestinyPlatforms } from '../../models/destiny';

@Component({
    selector: 'asc-destiny-lookup-view',
    templateUrl: './destiny-lookup-view.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DestinyLookupViewComponent {

    public lookupActive = false;

    public platform = DestinyPlatforms.PC;

    public platformOptions = [
        { display: 'PC', value: DestinyPlatforms.PC },
        { display: 'PS4', value: DestinyPlatforms.PS4 },
        { display: 'XBOX', value: DestinyPlatforms.XBOX }
    ];

    public username: string;

    @ViewChild(BackdropComponent, { static: false }) lookupBackdrop: BackdropComponent;

    constructor(
        private cd: ChangeDetectorRef,
        private seo: SEOService
    ) {
        this.seo.updateTitle(`${GameTitles.DESTINY} Player Lookup`);
        this.seo.updateDescription(`Look up any ${GameTitles.DESTINY} player by battletag to see their stats`);
    }

    playerLookup(username: string): void {
        this.lookupActive = true;
        this.username = username;
        this.lookupBackdrop.open();
        this.cd.markForCheck();
    }

    public listenForEnter(event: KeyboardEvent): void {
        if (event.key === 'Enter') {
            event.preventDefault();
            this.playerLookup(event.target['value']);
        }
    }

    public setPlatform(event): void {
        this.platform = event.value;
        this.cd.markForCheck();
    }

}
