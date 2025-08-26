import { Component } from '@angular/core';

@Component({
  selector: 'app-vowel-game',
  templateUrl: './vowel-game.component.html',
  styleUrls: ['./vowel-game.component.css']
})
export class VowelGameComponent {
  letters: string[] = [];
  vowels: string[] = ['A', 'E', 'I', 'O', 'U'];
  selected: string[] = [];
  score: number = 0;
  finished: boolean = false;

  ngOnInit() {
    this.generateLetters();
  }

  generateLetters() {
    this.letters = [];
    this.selected = [];
    this.finished = false;
    this.score = 0;
    const allLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    // Pick 8 random letters
    while (this.letters.length < 8) {
      const l = allLetters[Math.floor(Math.random() * allLetters.length)];
      if (!this.letters.includes(l)) this.letters.push(l);
    }
  }

  selectLetter(letter: string) {
    if (this.finished || this.selected.includes(letter)) return;
    this.selected.push(letter);
    if (this.vowels.includes(letter)) {
      this.score++;
    }
    if (this.selected.length === this.letters.length) {
      this.finished = true;
    }
  }

  nextGame() {
    this.generateLetters();
  }
}
