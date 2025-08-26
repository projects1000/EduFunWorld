import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UkgMenuComponent } from './ukg-menu.component';
import { UkgEnglishGameComponent } from './ukg-english-game.component';
import { BobbleGameComponent } from './bobble-game.component';

@NgModule({
  declarations: [UkgMenuComponent, UkgEnglishGameComponent, BobbleGameComponent],
  imports: [CommonModule, RouterModule],
  exports: [UkgMenuComponent, UkgEnglishGameComponent, BobbleGameComponent, RouterModule]
})
export class UkgModule {}
