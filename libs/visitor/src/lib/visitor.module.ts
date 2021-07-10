import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { PoiListComponent } from './poi-list/poi-list.component';
import { PoiModule } from '@packt/poi'
import { RouterModule } from '@angular/router';
import { VisitorComponent } from './visitor.component';
import { MapComponent } from './map/map.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [CommonModule, LayoutModule, MatToolbarModule,
    MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
    RouterModule.forChild([

      { path: '', component: VisitorComponent }

    ]),
    PoiModule,GoogleMapsModule,MatCardModule],
  declarations: [VisitorComponent,PoiListComponent, MapComponent],
})
export class VisitorModule {}
