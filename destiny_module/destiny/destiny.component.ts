import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicInfoService, SEOService, GameTitles } from '@ascendant/core';
import { BungieService } from './service/bungie.service';

@Component({
  selector: 'asc-destiny',
  templateUrl: './destiny.component.html',
  styleUrls: ['./destiny.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DestinyComponent {

  constructor(
    public info: BasicInfoService,
    public bungie: BungieService,
    private seo: SEOService
  ) {
    this.seo.updateTitle(GameTitles.DESTINY);
    this.seo.updateDescription(`${info.name} stats, leaderboards, and events for ${GameTitles.DESTINY} on PC.`);
  }

}
