import { Injectable } from '@angular/core';
import { PoiEntity } from 'libs/poi/src';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  getStatistics(pois: PoiEntity[]): number[] {

    return pois.map(poi => {

      const stat = localStorage.getItem('tour-' +

        poi.id) ?? 0;

      return +stat;

    });
  }
}
