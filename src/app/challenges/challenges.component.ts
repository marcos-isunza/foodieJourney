import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css']
})
export class ChallengesComponent implements OnInit {
  constructor() {}

  challengeProgress = 0;
  challengeWidth = 0;

  checkProgress() {
    if (localStorage.getItem('challenge1') != null) {
      this.challengeProgress = 20;
      this.challengeWidth = 20 * 196 / 100;
    }
  }

  ngOnInit() {
    this.checkProgress();
  }
}
