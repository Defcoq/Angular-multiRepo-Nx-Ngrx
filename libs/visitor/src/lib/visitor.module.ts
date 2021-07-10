import { CommonModule } from '@angular/common';
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

@NgModule({
  imports: [CommonModule, LayoutModule, MatToolbarModule,
    MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
    RouterModule.forChild([

      { path: '', component: VisitorComponent }

    ]),
    PoiModule],
  declarations: [VisitorComponent,PoiListComponent],
})
export class VisitorModule {}
