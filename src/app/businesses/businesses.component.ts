import { Component, OnInit, OnChanges } from '@angular/core';
import {
  YelpServiceComponent
} from '../service/yelp-service';
import {
  Business
} from '../business-interface';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-businesses',
  templateUrl: './businesses.component.html',
  styleUrls: ['./businesses.component.css']
})
export class BusinessesComponent implements OnInit {

  constructor(private _businessService: YelpServiceComponent, private _route: ActivatedRoute, private _router: Router) {
     console.log(this._route.snapshot.paramMap.get('ctg'));
  }
  business: Business[] = [];
  errorMessage: string;
  geolocationPosition = {};
  //category = 'Japanese';
 category = this._route.snapshot.paramMap.get('ctg');
  ngOnInit() {
    //get Geolocation
        if (window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.geolocationPosition = position.coords,
                    console.log(position.coords);
                    console.log(this.category);
                    this._businessService.getBusinessByLocation(this.geolocationPosition, this.category)
                    .subscribe(business => {
                      this.business = business;
                    },
                    error => this.errorMessage = < any > error);
                    ;
            },
            error => this.errorMessage = < any > error);
    }
  }

}
