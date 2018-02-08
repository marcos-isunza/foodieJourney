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
  logname = 'Log In';
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
openNav() {
    document.getElementById("mySidenav").style.width = "150px";
    document.getElementById("main").style.marginLeft = "150px";
}

closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

logout(){
  this.logname= 'Log Out';
}

login(){
  if(this.logname =='Log Out'){
    this.logname= 'Log In'
  }
}
}
