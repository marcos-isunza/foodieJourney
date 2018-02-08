import {
  Business
} from './business-interface';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  YelpServiceComponent
} from './service/yelp-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [YelpServiceComponent]
})
export class AppComponent implements OnInit {
  title = 'app';
  display = 'none';
  constructor(private _businessService: YelpServiceComponent) {}

  // business: Business[] = [];
  // errorMessage: string;

  // geolocationPosition = {};
  // category = 'Mexican';
  handle_prueba(){
    console.log("Hola");
  
  }
    open() {
      this.display='block'; 
    }
    onCloseHandled(){
      this.display='none'; 
    }
  ngOnInit(): void {

        //get Geolocation
    //     if (window.navigator && window.navigator.geolocation) {
    //     window.navigator.geolocation.getCurrentPosition(
    //         position => {
    //             this.geolocationPosition = position.coords,
    //                 console.log(position.coords);
    //                 this._businessService.getBusinessByLocation(this.geolocationPosition, this.category)
    //                 .subscribe(business => {
    //                   this.business = business;
    //                 },
    //                 error => this.errorMessage = < any > error);
    //                 ;
    //         },
    //         error => this.errorMessage = < any > error);

    // }

  }

}
