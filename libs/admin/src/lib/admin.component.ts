import { Component, OnDestroy, OnInit } from '@angular/core';
import { PoiActions, PoiEntity, PoiSelectors } from 'libs/poi/src/';

import { AdminService } from './admin.service';
import { Label } from 'ng2-charts';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'packt-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit, OnDestroy {
  private subscription: Subscription | undefined;
  data: number[] = [];

  labels: Label[] = [];

  constructor(private store: Store, private adminService: AdminService) { }

  ngOnInit(): void {
    this.subscription = this.store.select(PoiSelectors.getAllPoi).subscribe(pois => {

      this.buildChart(pois);

  });

    this.store.dispatch(PoiActions.init());
  }

  private buildChart(pois: PoiEntity[]) {

    this.labels = pois.map(poi => poi.name);

    this.data = this.adminService.getStatistics(pois);

  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
