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
  DescJournal: string;
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
  title: string;
  p_disabled: boolean = false;
  testcolor: string;
  testTrue: boolean = false;
  business: Business[] = [];
  errorMessage: string;
  geolocationPosition = {};
  postNumber = 0;
  defaultImage = '../../assets/no-image.jpg';
  progress = 0;
  isComplete1italian = false;
  checkmark: string;
  imageProgress: string;

  category = this._route.snapshot.paramMap.get('ctg');
  TitleJournal: string = this.category;
  bimage: string = 'url("../../assets/' + this.TitleJournal + '.png")';

  getTotalProgress() {
    if (this.category == 'burgers') {
      this.progress = +localStorage.getItem('totalProgressAmerican');
      this.imageProgress = '../../assets/burgers.png';
    }
    if (this.category == 'italian') {
      this.progress = +localStorage.getItem('totalProgressItalian');
      this.imageProgress = '../../assets/italian.png';
    }
    if (this.category == 'japanese') {
      this.progress = +localStorage.getItem('totalProgressJapanese');
      this.imageProgress = '../../assets/japanese.png';
    }
    if (this.category == 'korean') {
      this.progress = +localStorage.getItem('totalProgressKorean');
      this.imageProgress = '../../assets/korean.png';
    }
    if (this.category == 'mexican') {
      this.progress = +localStorage.getItem('totalProgressMexican');
      this.imageProgress = '../../assets/mexican.png';
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
    this.f_title(this.category);
    this.testCond();
    localStorage.setItem('testTrue', 'false');
  }

  myFunction() {
    var x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
      x.className += ' responsive';
    } else {
      x.className = 'topnav';
    }
  }

  public testCond() {
    if (localStorage.getItem('testTrue') == 'false') {
      this.testcolor = 'gray';
    } else {
      this.testcolor = '#2cb2ff';
    }
  }
  public hide() {
    this.display = 'block';
    this.hidden = 'none';
    console.log(this.category);
  }
  public f_title(title: string) {
    switch (title) {
      case 'burgers': {
        this.DescJournal =
          'One characteristics of America cooking is the fusion of multiple ethnic or regional approaches into completely new cooking styles';
        break;
      }
      case 'korean': {
        this.DescJournal =
          'Originating from ancient agricultural and nomadic traditions, Korean cuisine has evolved through a complex interaction of the natural environment and different cultural trends.';
        break;
      }
      case 'italian': {
        this.DescJournal =
          'An Italian meal is famous for its structure into several sections: the appetiser, pasta or rice dish, a meat course and dolce dessert.';
        break;
      }
      case 'mexican': {
        this.DescJournal =
          'Known for its varied flavours and spices, the food of Mexico is a result of the Spanish conquistadores interactio with the Aztec culture.';
        break;
      }
      case 'japanese': {
        this.DescJournal =
          'In 2014, 14 restaurants in Tokio and Shonan maintain a Michelin three-stars raiting, the ultimate international recognition in the culinary world.';
        break;
      }
    }
  }
}
