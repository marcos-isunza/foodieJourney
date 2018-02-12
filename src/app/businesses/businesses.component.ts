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
  testcolor: string;
  testTrue: boolean = true;
  business: Business[] = [];
  errorMessage: string;
  geolocationPosition = {};
  postNumber = 0;
  defaultImage = '../../assets/no-image.jpg';

  category = this._route.snapshot.paramMap.get('ctg');

  storeLocation(location) {
    localStorage.setItem('latitude', JSON.stringify(location['latitude']));
    localStorage.setItem('longitude', JSON.stringify(location['longitude']));
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
    this.testCond(this.testTrue);
  }
  myFunction() {
    var x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
      x.className += ' responsive';
    } else {
      x.className = 'topnav';
    }
  }
  public testCond (testTrue){
    if(testTrue == false){
      this.testcolor= 'gray';
    }
    else{

    this.testcolor= '#2cb2ff';
    }
  }
  
  public hide() {
    this.display = 'block';
    this.hidden = 'none';
    console.log(this.category);
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
