import { Component, OnInit, OnChanges } from '@angular/core';
import { YelpServiceComponent } from '../service/yelp-service';
import { Business } from '../business-interface';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-businesses',
  templateUrl: './businesses.component.html',
  styleUrls: ['./businesses.component.css'],
  providers: [NgbTabsetConfig]
})
export class BusinessesComponent implements OnInit, OnChanges {
  TitleJournal;
  DescJournal;
  text_tittle: boolean;
  constructor(
    private _businessService: YelpServiceComponent,
    private _route: ActivatedRoute,
    private _router: Router,
    config: NgbTabsetConfig
  ) {
    config.justify = 'start';
    config.type = 'tabs';
  }
  display = 'none';
  hidden = 'block';
  address: string;
  p_disabled: boolean = false;

  business: Business[] = [];
  errorMessage: string;
  geolocationPosition = {};
  postNumber = 0;
  defaultImage = '../../assets/no-image.jpg';
  progress = 0;
  isComplete1italian = false;
  checkmark: string;

  category = this._route.snapshot.paramMap.get('ctg');

  getTotalProgress() {
    if (this.category == 'burgers') {
      this.progress = +localStorage.getItem('totalProgressAmerican');
    }
    if (this.category == 'italian') {
      this.progress = +localStorage.getItem('totalProgressItalian');
    }
    if (this.category == 'japanese') {
      this.progress = +localStorage.getItem('totalProgressJapanese');
    }
    if (this.category == 'korean') {
      this.progress = +localStorage.getItem('totalProgressKorean');
    }
    if (this.category == 'mexican') {
      this.progress = +localStorage.getItem('totalProgressMexican');
    }
  }

  storeLocation(location) {
    localStorage.setItem('latitude', JSON.stringify(location['latitude']));
    localStorage.setItem('longitude', JSON.stringify(location['longitude']));
  }

  setComplete() {
    for (let index = 0; index <= 5; index++) {
      if (localStorage.getItem('challenge' + index + '-italian') === 'true') {
        this.checkmark = '&#10004;';
      }
      if (localStorage.getItem('challenge' + index + '-mexican') === 'true') {
      }
      if (localStorage.getItem('challenge' + index + '-japanese') === 'true') {
      }
      if (localStorage.getItem('challenge' + index + '-korean') === 'true') {
      }
      if (localStorage.getItem('challenge' + index + '-burgers') === 'true') {
      }
    }
  }

  ngOnChanges() {}

  ngOnInit() {
    //get Geolocation
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(position => {
        (this.geolocationPosition = position.coords),
          this.storeLocation(this.geolocationPosition),
          this._businessService
            // .getBusinessByLocation(this.geolocationPosition, this.category)
            .getBusinessByLocation(this.category)
            .subscribe(business => {
              this.business = business;
            }, error => (this.errorMessage = <any>error));
      }, error => (this.errorMessage = <any>error));
    }
    this.getTotalProgress();
  }

  myFunction() {
    var x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
      x.className += ' responsive';
    } else {
      x.className = 'topnav';
    }
  }
  public hide() {
    this.display = 'block';
    this.hidden = 'none';
  }
  public f_click(id: number) {
    switch (id) {
      case 1: {
        this.text_tittle = true;
        this.TitleJournal = 'American';
        this.DescJournal =
          'One characteristic of America cooking is the fusion of multiple ethnic or regional approaches into completely new cooking styles';
        console.log(this.text_tittle);
        break;
      }
      case 2: {
        this.text_tittle = true;
        this.TitleJournal = 'Korean';
        this.DescJournal =
          'One characteristics of America cooking is the fusion of multiple ethnic or regional approaches into completely new cooking styles';
        break;
      }
      case 3: {
        this.text_tittle = true;
        this.TitleJournal = 'Italian';
        this.DescJournal =
          'One characteristics of America cooking is the fusion of multiple ethnic or regional approaches into completely new cooking styles';
        break;
      }
      case 4: {
        this.text_tittle = true;
        this.TitleJournal = 'Mexican';
        this.DescJournal =
          'One characteristics of America cooking is the fusion of multiple ethnic or regional approaches into completely new cooking styles';
        break;
      }
      case 5: {
        this.text_tittle = true;
        this.TitleJournal = 'Japanese';
        this.DescJournal =
          'One characteristics of America cooking is the fusion of multiple ethnic or regional approaches into completely new cooking styles';
        break;
      }
    }
  }
}
