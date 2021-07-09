import { AdminModule } from '../../../../libs/admin/src/lib/admin.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    RouterModule.forRoot([
  { path: 'admin', loadChildren: () => import('../../../../libs/admin/src/lib/admin.module').then(m => m.AdminModule) },
      {
        path: 'tour',
        loadChildren: () => import('@packt/visitor').then((m) => m.VisitorModule),
      },

      { path: '', pathMatch: 'full', redirectTo: 'tour' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
