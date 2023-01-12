import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddArray: number[] = [];
  evenArray: number[] = [];
  ref: any;

  startGameRoot(event: number) {
    this.ref = setInterval(() => {
      event++;

      if (event % 2 == 0) {
        this.evenArray.push(event);
      } else {
        this.oddArray.push(event);
      }
    }, 1000);
  }

  stopGameRoot() {
    clearInterval(this.ref);
    this.oddArray = [];
    this.evenArray = [];
  }
}
