import {
  Component,
  OnInit,
  OnChanges
} from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  YelpServiceComponent
} from '../service/yelp-service';
import {
  Business
} from '../business-interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],

})
export class DetailsComponent implements OnInit {

  constructor(private _businessService: YelpServiceComponent, private _route: ActivatedRoute, private _router: Router) {}

  businessObject = {};
  errorMessage: string;
  id = this._route.snapshot.paramMap.get('id');

  ngOnInit() {
    console.log(this.id);
    this._businessService.getBusinessById(this.id)
      .subscribe(business => {
          this.businessObject = business;
          console.log(this.businessObject);
        },
        error => this.errorMessage = < any > error);
  }
}
