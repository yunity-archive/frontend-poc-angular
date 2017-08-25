import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

import {reducers, metaReducers} from './app.reducers';

import {
  MdSidenavModule,
  MdToolbarModule,
  MdIconModule,
  MdButtonModule,
  MdListModule,
  MdProgressBarModule,
  MdCardModule
} from '@angular/material';

import { AppComponent } from './app.component';
import {EffectsModule} from '@ngrx/effects';
import {GroupEffects} from './group.effects';
import {GroupService} from './group.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forFeature([GroupEffects]),
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdListModule,
    MdProgressBarModule,
    MdCardModule
  ],
  providers: [GroupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
