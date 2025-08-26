import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UkgMenuComponent } from './ukg-menu.component';
import { UkgEnglishGameComponent } from './ukg-english-game.component';

@NgModule({
  declarations: [UkgMenuComponent, UkgEnglishGameComponent],
  imports: [CommonModule, RouterModule],
  exports: [UkgMenuComponent, UkgEnglishGameComponent, RouterModule]
})
export class UkgModule {}
