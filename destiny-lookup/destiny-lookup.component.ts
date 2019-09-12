import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { PopupsService, Destroyer } from '@ascendant/core';
import { take } from 'rxjs/operators';
import { DestinyStatsComponent } from '../destiny-stats/destiny-stats.component';
import { DestinyPlayerLookup, DestinyPlatforms } from '../../models/destiny';
import { BungieService } from '../../service/bungie.service';

@Component({
  selector: 'asc-destiny-lookup',
  templateUrl: './destiny-lookup.component.html',
  styleUrls: ['./destiny-lookup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DestinyLookupComponent extends Destroyer {

  public lookup: DestinyPlayerLookup;

  public failure = false;

  public noResults = false;

  private _username: string;

  @Input() platform: DestinyPlatforms;

  @Input()
  set username(username: string) {
    this._username = username;
    if (username) {
      this.noResults = false;
      this.stats.pveStats = this.stats.pvpStats = undefined;
      this.cd.markForCheck();
      this.bungie.generatePlayerLookup(username, this.platform || DestinyPlatforms.PC).pipe(
        take(1)
      ).subscribe(lookup => {
        if (lookup) {
          this.lookup = lookup;
          this.stats.loadStats(this.lookup.pvpStats, this.lookup.pveStats);
        } else {
          this.noResults = true;
        }
        this.cd.markForCheck();
      }, err => {
        console.error(`Failed to find stats for ${username}`, err);
        this.failure = true;
        this.popup.openPopup(`message`, `360px`, `Unable to find D2 stats for ${username}`);
        this.cd.markForCheck();
      });
    }
  }

  @ViewChild(DestinyStatsComponent, { static: false }) stats: DestinyStatsComponent;

  constructor(private bungie: BungieService, private cd: ChangeDetectorRef, private popup: PopupsService) {
    super();
  }

  get username(): string {
    return this._username;
  }

}
