import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SpellGameComponent } from './spell-game.component';
import { IdentifyGameComponent } from './identify-game.component';
import { VowelGameComponent } from './vowel-game.component';
import { MissingLetterGameComponent } from './missing-letter-game.component';
import { FormWordGameComponent } from './form-word-game.component';

@NgModule({
  declarations: [
    SpellGameComponent,
    IdentifyGameComponent,
    VowelGameComponent,
    MissingLetterGameComponent,
    FormWordGameComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SpellGameComponent,
    IdentifyGameComponent,
    VowelGameComponent,
    MissingLetterGameComponent,
    FormWordGameComponent
  ]
})
export class GamesModule {}
