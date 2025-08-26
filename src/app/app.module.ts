import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GameMenuComponent } from './game-menu.component';
import { GamesModule } from './games/games.module';
import { NurseryModule } from './nursery/nursery.module';
import { LkgModule } from './lkg/lkg.module';
import { UkgModule } from './ukg/ukg.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SwUpdate } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    GameMenuComponent
  ],
  imports: [
    BrowserModule,
    GamesModule,
    NurseryModule,
    LkgModule,
    UkgModule,
  AppRoutingModule,
  RouterModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [SwUpdate],
  bootstrap: [AppComponent]
})
export class AppModule { }
