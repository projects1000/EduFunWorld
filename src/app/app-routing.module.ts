import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { GameMenuComponent } from './game-menu.component';
import { NurseryMenuComponent } from './nursery/nursery-menu.component';
import { NurseryEnglishGameComponent } from './nursery/nursery-english-game.component';
import { LkgMenuComponent } from './lkg/lkg-menu.component';
import { LkgEnglishGameComponent } from './lkg/lkg-english-game.component';
import { UkgMenuComponent } from './ukg/ukg-menu.component';
import { UkgEnglishGameComponent } from './ukg/ukg-english-game.component';
import { SpellGameComponent } from './games/spell-game.component';
import { IdentifyGameComponent } from './games/identify-game.component';
import { VowelGameComponent } from './games/vowel-game.component';
import { MissingLetterGameComponent } from './games/missing-letter-game.component';
import { FormWordGameComponent } from './games/form-word-game.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'menu', component: GameMenuComponent },
  { path: 'nursery', component: NurseryMenuComponent },
  { path: 'nursery-english', component: NurseryEnglishGameComponent },
  { path: 'lkg', component: LkgMenuComponent },
  { path: 'lkg-english', component: LkgEnglishGameComponent },
  { path: 'ukg', component: UkgMenuComponent },
  { path: 'ukg-english', component: UkgEnglishGameComponent },
  { path: 'spell', component: SpellGameComponent },
  { path: 'identify', component: IdentifyGameComponent },
  { path: 'vowel', component: VowelGameComponent },
  { path: 'missing-letter', component: MissingLetterGameComponent },
  { path: 'form-word', component: FormWordGameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
