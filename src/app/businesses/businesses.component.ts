import { Component, OnInit, OnChanges } from '@angular/core';
import {
  YelpServiceComponent
} from '../service/yelp-service';
import {
  Business
} from '../business-interface';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-businesses',
  templateUrl: './businesses.component.html',
  styleUrls: ['./businesses.component.css'],
  providers: [NgbTabsetConfig]
})
export class BusinessesComponent implements OnInit {

  constructor(private _businessService: YelpServiceComponent, private _route: ActivatedRoute, private _router: Router, config: NgbTabsetConfig) {
     console.log(this._route.snapshot.paramMap.get('ctg'));
      config.justify = 'start';
      config.type = 'tabs';
  }

var_show: boolean;
var_show1: boolean;
  business: Business[] = [];
  errorMessage: string;
  geolocationPosition = {};
  postNumber = 0;
  generatePostNumber(){

    this.postNumber = this.postNumber +1;
  }

 category = this._route.snapshot.paramMap.get('ctg');
  ngOnInit() {
    //get Geolocation
        if (window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.geolocationPosition = position.coords,
                    this._businessService.getBusinessByLocation(this.geolocationPosition, this.category)
                    .subscribe(business => {
                      this.business = business;
                      //this.generatePostNumber();
                    },
                    error => this.errorMessage = < any > error);
                    ;
            },
            error => this.errorMessage = < any > error);
    }
  }

}
