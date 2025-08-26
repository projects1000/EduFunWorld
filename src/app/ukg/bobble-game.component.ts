import { Component } from '@angular/core';

interface Balloon {
  letter: string;
  top: number;
  left: number;
  burst: boolean;
}

@Component({
  selector: 'app-bobble-game',
  templateUrl: './bobble-game.component.html',
  styleUrls: ['./bobble-game.component.css']
})
export class BobbleGameComponent {
  balloons: Balloon[] = [];
  intervalId: any;
  vowels = ['A', 'E', 'I', 'O', 'U'];
  gameActive = false;
  showCongrats = false;

  startGame() {
    this.gameActive = true;
    this.showCongrats = false;
    this.balloons = this.generateBalloons();
    this.intervalId = setInterval(() => this.moveBalloons(), 100); // slower
  }

  stopGame() {
    this.gameActive = false;
    clearInterval(this.intervalId);
  }

  generateBalloons(): Balloon[] {
    const balloons: Balloon[] = [];
    const total = 26;
    for (let i = 0; i < total; i++) {
      // Evenly spread balloons horizontally, with a little random offset
      const baseLeft = (i * (90 / (total - 1))) + 5; // 5% to 95% evenly
      const left = baseLeft + (Math.random() * 2 - 1); // +/- 1% random
      balloons.push({
        letter: String.fromCharCode(65 + i),
        top: 100 + Math.random() * 10, // staggered start
        left,
        burst: false
      });
    }
    return balloons;
  }

  moveBalloons() {
    this.balloons.forEach((balloon, idx) => {
      if (!balloon.burst) {
        // staggered speed: odd/even index, random
        const speed = 0.3 + Math.random() * 0.5 + (idx % 2 === 0 ? 0.1 : 0);
        balloon.top -= speed;
        if (balloon.top < 0) balloon.top = 100 + Math.random() * 10;
      }
    });
  }

  clickBalloon(balloon: Balloon) {
    if (this.vowels.includes(balloon.letter) && !balloon.burst) {
      balloon.burst = true;
      // Check if all vowels are burst
      const allVowelsBurst = this.balloons.filter(b => this.vowels.includes(b.letter)).every(b => b.burst);
      if (allVowelsBurst) {
        this.showCongrats = true;
        this.stopGame();
      }
    }
  }

  get allVowelsBurst(): boolean {
    return this.balloons.filter(b => this.vowels.includes(b.letter)).every(b => b.burst);
  }
}
