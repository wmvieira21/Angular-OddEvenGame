import { Component, EventEmitter, Output } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output('startGameRoot') startGameRoot = new EventEmitter<number>();
  @Output() stopGameRoot = new EventEmitter();

  count: number = 0;

  startGame() {
    this.startGameRoot.emit(this.count);
  }

  stopGame() {
    this.stopGameRoot.emit({});
  }
}
