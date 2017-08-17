import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { CovalentModule} from './covalent/covalent.module';

import {MdButtonModule, MdToolbarModule, MdSidenavModule, MdGridListModule, MdMenuModule, MdIconModule, MdTabsModule} from '@angular/material';

import { EsriLoaderService } from 'angular2-esri-loader';
import { EsriMapComponent } from './esri-map/esri-map.component';


import { CovalentMessageModule } from '@covalent/core';

import 'hammerjs';
import { CubeComponent } from './cube/cube.component';


@NgModule({
  declarations: [
    AppComponent,
    EsriMapComponent,
    CubeComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MdButtonModule, MdToolbarModule, MdSidenavModule, MdGridListModule, MdMenuModule, MdIconModule, MdTabsModule, CovalentModule,  CovalentMessageModule
  ],
  providers: [EsriLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
