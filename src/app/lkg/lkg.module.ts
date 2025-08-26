import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LkgMenuComponent } from './lkg-menu.component';
import { LkgEnglishGameComponent } from './lkg-english-game.component';

@NgModule({
  declarations: [LkgMenuComponent, LkgEnglishGameComponent],
  imports: [CommonModule, RouterModule],
  exports: [LkgMenuComponent, LkgEnglishGameComponent, RouterModule]
})
export class LkgModule {}
