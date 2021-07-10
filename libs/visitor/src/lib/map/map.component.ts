import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { PoiActions, PoiSelectors } from '@packt/poi';

import { Store } from '@ngrx/store';

@Component({
  selector: 'packt-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  @ViewChild(MapInfoWindow) info: MapInfoWindow | undefined;
  poi$ = this.store.select(PoiSelectors.getSelected);

  constructor(private store: Store) {}

  ngOnInit(): void {}

 /* showInfo(marker: MapMarker) {
    this.info?.open(marker);
  }*/

  showInfo(marker: MapMarker, poiId: string | number) {
    this.store.dispatch(PoiActions.visitPoi({ poiId }));
    this.info?.open(marker);
  }
}
