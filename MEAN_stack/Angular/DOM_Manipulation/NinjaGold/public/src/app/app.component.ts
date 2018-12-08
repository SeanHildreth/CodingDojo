import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ninja Gold';
  gold = 0;
  activities = [];

  constructor(private _httpService: HttpService) {

  }

  ngOnInit() {
  }

  resetGold() {
    this.gold = 0;
    this.activities.push('You reset your gold back to 0, better luck next time!');
  }

  farm() {
    let a = Math.floor(Math.random() * (5 - 2 + 1)) + 2;
    this.gold += a;
    this.activities.push('You earned ' + a + ' gold working on the farm!');
  }

  cave() {
    let a = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
    this.gold += a;
    this.activities.push('You earned ' + a + ' cave diving for treasure!');
  }

  house() {
    let a = Math.floor(Math.random() * (15 - 7 + 1)) + 7;
    this.gold += a;
    this.activities.push('You earned ' + a + ' working from home!');
  }

  casino() {
    let a = Math.floor(Math.random() * (100 - (-100) + 1)) + (-100);
    this.gold += a;
    if(a >= 0) {
      this.activities.push('You won ' + a + ' gambling at the casino!');
    } else {
      this.activities.push('You lost ' + a + ' gambling at the casino!');
    }
  }
}
