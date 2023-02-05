import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-tb';
  showing = false;
  changeFontSize = false;

  constructor() {
    setTimeout(() => {
      this.showing = true;
    }, 500);
    setTimeout(() => {
      this.changeFontSize = true;
    }, 1500);
  }
}
