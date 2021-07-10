import * as PoiActions from './poi.actions';
import * as PoiFeature from './poi.reducer';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { Injectable } from '@angular/core';
import { PoiService } from '../poi.service'
import { fetch } from '@nrwl/angular';
import { map } from 'rxjs/operators';

@Injectable()
export class PoiEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PoiActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return this.poiService.getAll().pipe(

            map(pois => PoiActions.loadPoiSuccess({ poi:

             pois }))

          )
        },
        onError: (action, error) => {
          console.error('Error', error);
          return PoiActions.loadPoiFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions, private poiService: PoiService) {}
}
