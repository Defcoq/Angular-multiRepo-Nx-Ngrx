import { AdminModule } from '../../../../libs/admin/src/lib/admin.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    RouterModule.forRoot([
      {
        path: 'admin',
        loadChildren: () => import('@packt/admin').then((m) => m.AdminModule),
      },
      {
        path: 'tour',
        loadChildren: () =>
          import('@packt/visitor').then((m) => m.VisitorModule),
      },

      { path: '', pathMatch: 'full', redirectTo: 'tour' },
    ]),

    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),

    EffectsModule.forRoot([]),

    !environment.production ? StoreDevtoolsModule.instrument() : [],

    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
