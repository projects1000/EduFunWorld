import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UkgMenuComponent } from './ukg-menu.component';
import { UkgEnglishGameComponent } from './ukg-english-game.component';
import { BobbleGameComponent } from './bobble-game.component';
import { UkgPuzzleComponent } from './ukg-puzzle.component';

@NgModule({
  declarations: [UkgMenuComponent, UkgEnglishGameComponent, BobbleGameComponent, UkgPuzzleComponent],
  imports: [CommonModule, RouterModule],
  exports: [UkgMenuComponent, UkgEnglishGameComponent, BobbleGameComponent, UkgPuzzleComponent, RouterModule]
})
export class UkgModule {}
