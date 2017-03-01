import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
import { MaterialModule } from '@angular/material';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { routing } from './app.routing';


import { App } from './app.component';
import { AppState, InternalStateType } from './app.service';
import { GlobalState } from './global.state';
import { NgaModule } from './theme/nga.module';
import { CommonAppModule } from './common/common.app.module';
import { PagesModule } from './pages/pages.module';


const APP_PROVIDERS = [
  AppState,
  GlobalState
];

export type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [App],
  declarations: [
    App
  ],
  imports: [ 
    BrowserModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CommonAppModule.forRoot(),
    NgaModule.forRoot(),
    MaterialModule.forRoot(),
    PagesModule,
    routing
  ],
  providers: [ 
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})

export class AppModule {

  constructor(public appRef: ApplicationRef, public appState: AppState) {
  }

  hmrOnInit(store: StoreType) {
    if (!store || !store.state) return;
    console.log('HMR store', JSON.stringify(store, null, 2));
    // set state
    this.appState._state = store.state;
    // set input values
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }
    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);

    const state = this.appState._state;
    store.state = state;

    store.disposeOldHosts = createNewHosts(cmpLocation);

    store.restoreInputValues = createInputTransfer();

    removeNgStyles();
  }

  hmrAfterDestroy(store: StoreType) {

    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
