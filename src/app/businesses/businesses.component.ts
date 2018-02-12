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
export class BusinessesComponent implements OnInit, OnChanges {
  TitleJournal;
  DescJournal;
  text_tittle: boolean;
  constructor(private _businessService: YelpServiceComponent, private _route: ActivatedRoute, private _router: Router, config: NgbTabsetConfig) {
     console.log(this._route.snapshot.paramMap.get('ctg'));
      config.justify = 'start';
      config.type = 'tabs';
  }
  display= 'none';
  hidden= 'block';
  address:string;
  p_disabled:boolean = false;
  business: Business[] = [];
  errorMessage: string;
  geolocationPosition = {};
  postNumber = 0;
  generatePostNumber(){
    this.postNumber = this.postNumber +1;
  }

 category = this._route.snapshot.paramMap.get('ctg');
 ngOnChanges(){}
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
  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
  public hide(){
    this.display ='block';
    this.hidden = 'none';
  }
  public f_click(id: number){
    switch(id) { 
      case 1: { 
        this.text_tittle = true;
        this.address = "businesses/american";
        this.TitleJournal = "American";
          this.DescJournal = "One characteristics of America cooking is the fusion of multiple ethnic or regional approaches into completely new cooking styles" 
        console.log(this.text_tittle);
         break; 
      } 
      case 2: { 
        this.text_tittle = true;
        this.address = "businesses/korean";
        this.TitleJournal = "Korean";
        this.DescJournal = "One characteristics of America cooking is the fusion of multiple ethnic or regional approaches into completely new cooking styles" 
         break; 
      }
      case 3: { 
        this.text_tittle = true;
        this.TitleJournal = "Italian";
        this.DescJournal = "One characteristics of America cooking is the fusion of multiple ethnic or regional approaches into completely new cooking styles" 
         break; 
      } 
      case 4: { 
        this.text_tittle = true;
        this.TitleJournal = "Mexican";
        this.DescJournal = "One characteristics of America cooking is the fusion of multiple ethnic or regional approaches into completely new cooking styles" 
        this._router.navigateByUrl('/businesses/mexican'); 
        break; 
      }
      case 5: { 
        this.text_tittle = true;
        this.TitleJournal = "Japanese";
        this.DescJournal = "One characteristics of America cooking is the fusion of multiple ethnic or regional approaches into completely new cooking styles" 
         break; 
      }   
   } 
  }
}
