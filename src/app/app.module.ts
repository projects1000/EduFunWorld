import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GameMenuComponent } from './game-menu.component';
import { GamesModule } from './games/games.module';
import { NurseryModule } from './nursery/nursery.module';
import { LkgModule } from './lkg/lkg.module';
import { UkgModule } from './ukg/ukg.module';
import { AppRoutingModule } from './app-routing.module';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
