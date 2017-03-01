import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { MaterialModule } from '@angular/material';

import { routing }       from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { CommonAppModule } from '../common/common.app.module';

import { Pages } from './pages.component';

@NgModule({
  imports: [CommonModule, MaterialModule, NgaModule, CommonAppModule, routing],
  declarations: [Pages]
})
export class PagesModule {
}
