import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { FormsMainComponent } from './forms.main.component';
import { appRoutes, appRoutingProviders } from './common/app.routes';
import { AdminModule } from './admin/admin.module';
import { LandingModule } from './landing/landing.module';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule,
    AdminModule,
    LandingModule,
    appRoutes
  ],
  declarations: [
  	FormsMainComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ 
  	FormsMainComponent 
  ]
})

export class FormsMainModule { }