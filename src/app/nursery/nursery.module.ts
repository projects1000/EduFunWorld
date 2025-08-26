import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NurseryMenuComponent } from './nursery-menu.component';
import { NurseryEnglishGameComponent } from './nursery-english-game.component';

@NgModule({
  declarations: [NurseryMenuComponent, NurseryEnglishGameComponent],
  imports: [CommonModule, RouterModule],
  exports: [NurseryMenuComponent, NurseryEnglishGameComponent, RouterModule]
})
export class NurseryModule {}
