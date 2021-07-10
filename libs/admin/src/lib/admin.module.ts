import { AdminComponent } from './admin.component';
import { ChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PoiModule } from 'libs/poi/src/lib/poi.module';
import { RouterModule } from '@angular/router';
//import { PoiModule } from '@packt/poi';

@NgModule({
  imports: [CommonModule,RouterModule.forChild([

    { path: '', component: AdminComponent }

  ]), PoiModule,
  ChartsModule],
  declarations: [
    AdminComponent
  ],
})
export class AdminModule {}
