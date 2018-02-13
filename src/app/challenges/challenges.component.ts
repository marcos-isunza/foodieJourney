import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css']
})
export class ChallengesComponent implements OnInit {
  constructor() {}

  challengeProgressItalian = 0;
  challengeWidthItalian = 0;
  challengeProgressMexican = 0;
  challengeWidthMexican = 0;
  challengeProgressJapanese = 0;
  challengeWidthJapanese = 0;
  challengeProgressKorean = 0;
  challengeWidthKorean = 0;
  challengeProgressAmerican = 0;
  challengeWidthAmerican = 0;

  checkProgress() {
    let counterI = 0;
    let counterM = 0;
    let counterJ = 0;
    let counterK = 0;
    let counterA = 0;

    for (let index = 0; index <= 5; index++) {
      if (localStorage.getItem('challenge' + index + '-italian') === 'true') {
        this.challengeProgressItalian = this.challengeProgressItalian + 20;
        counterI++;
      }
      if (localStorage.getItem('challenge' + index + '-mexican') === 'true') {
        this.challengeProgressMexican = this.challengeProgressMexican + 20;
        counterM++;
      }
      if (localStorage.getItem('challenge' + index + '-japanese') === 'true') {
        this.challengeProgressJapanese = this.challengeProgressJapanese + 20;
        counterJ++;
      }
      if (localStorage.getItem('challenge' + index + '-korean') === 'true') {
        this.challengeProgressKorean = this.challengeProgressKorean + 20;
        counterK++;
      }
      if (localStorage.getItem('challenge' + index + '-burgers') === 'true') {
        this.challengeProgressAmerican = this.challengeProgressAmerican + 20;
        counterA++;
      }
    }
    localStorage.setItem(
      'totalProgressItalian',
      JSON.stringify(this.challengeProgressItalian)
    );
    localStorage.setItem(
      'totalProgressMexican',
      JSON.stringify(this.challengeProgressMexican)
    );
    localStorage.setItem(
      'totalProgressKorean',
      JSON.stringify(this.challengeProgressKorean)
    );
    localStorage.setItem(
      'totalProgressJapanese',
      JSON.stringify(this.challengeProgressJapanese)
    );
    localStorage.setItem(
      'totalProgressAmerican',
      JSON.stringify(this.challengeProgressAmerican)
    );
    this.challengeWidthItalian = counterI * 20 * 196 / 100;
    this.challengeWidthMexican = counterM * 20 * 196 / 100;
    this.challengeWidthJapanese = counterJ * 20 * 196 / 100;
    this.challengeWidthKorean = counterK * 20 * 196 / 100;
    this.challengeWidthAmerican = counterA * 20 * 196 / 100;
  }

  ngOnInit() {
    this.checkProgress();
  }
}
