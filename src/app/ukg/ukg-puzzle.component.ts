import { Component } from '@angular/core';

@Component({
  selector: 'app-ukg-puzzle',
  templateUrl: './ukg-puzzle.component.html',
  styleUrls: ['./ukg-puzzle.component.css']
})
export class UkgPuzzleComponent {
  showBobble = false;

  openBobble() {
    this.showBobble = true;
  }

  closeBobble() {
    this.showBobble = false;
  }
}
