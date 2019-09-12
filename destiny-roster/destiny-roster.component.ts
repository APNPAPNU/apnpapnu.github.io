import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { BasicInfoService, Destroyer, RoutingService, SEOService } from '@ascendant/core';
import { BehaviorSubject } from 'rxjs';
import { map, take, takeUntil } from 'rxjs/operators';
import { BackdropComponent } from '@ascendant/components';
import { DestinyProfileComponent } from '../destiny-profile/destiny-profile.component';
import { RosterItem } from '../../models/destiny';
import { BungieService } from '../../service/bungie.service';

@Component({
  selector: 'asc-destiny-roster',
  templateUrl: './destiny-roster.component.html',
  styleUrls: ['./destiny-roster.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DestinyRosterComponent extends Destroyer implements OnInit {

  public roster: BehaviorSubject<RosterItem[]>;
  public rosterTableColumnNames: string[] = ['icon', 'name', 'status', 'profile'];
  public dataSource: MatTableDataSource<RosterItem>;
  public selectedDestinyId: string;
  public selectedBungieId: string;
  public selectedPlayer: RosterItem;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(BackdropComponent, { static: false }) backdrop: BackdropComponent;
  @ViewChild(DestinyProfileComponent, { static: false }) profile: DestinyProfileComponent;

  constructor(
    public info: BasicInfoService,
    private seo: SEOService,
    public bungie: BungieService,
    private cd: ChangeDetectorRef,
    private routing: RoutingService,
    private activeRoute: ActivatedRoute
  ) {
    super();
    this.roster = new BehaviorSubject<RosterItem[]>([]);
  }

  ngOnInit() {
    this.bungie.getRoster().pipe(takeUntil(this.destroy$)).subscribe((data: RosterItem[]) => {
      this.roster.next(data);
      this.dataSource = new MatTableDataSource(this.roster.value);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      if (this.activeRoute.snapshot.params) {
        this.loadPlayerByUrl();
      }
    });
  }

  public searchRoster(filter: string): void {
    this.dataSource.filter = filter.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public viewPlayer(player: RosterItem): void {
    this.selectedPlayer = player;
    this.backdrop.open();
    this.routing.location.replaceState('/destiny/roster/' + player.destinyId + '/' + player.bungieId);
    this.seo.updateTitle(`${player.name} on Destiny 2`);
    this.seo.updateDescription(`Player stats for ${this.info.name}'s ${player.name} on Destiny 2`);
    this.cd.markForCheck();
  }

  public updateRoute(event: boolean): void {
    if (!event) {
      this.routing.setLocationState('/destiny');
    }
  }

  private loadPlayerByUrl(): void {
    const routeParams = this.activeRoute.snapshot.params;
    if (routeParams && routeParams.destinyId && routeParams.bungieId) {
      this.roster.pipe(
        map(players => {
          for (const player of players) {
            if (player.destinyId === routeParams.destinyId) {
              return player;
            }
          }
        }),
        take(1)
      ).subscribe(player => {
        this.viewPlayer(player);
      });
    }
  }

}
