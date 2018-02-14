import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { YelpServiceComponent } from '../service/yelp-service';
import { Business } from '../business-interface';
import { HttpClient } from '@angular/common/http';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  constructor(
    private _businessService: YelpServiceComponent,
    private _route: ActivatedRoute,
    private _router: Router,
    private spinnerService: Ng4LoadingSpinnerService
  ) {}
  display = 'none';
  hidden = 'block';
  btn_go1: boolean = true;
  btn_go2: boolean = false;
  btn_go3: boolean = false;
  p_disabled: boolean = true;
  p_disabled1: boolean = true;
  btn_started1: boolean = false;
  btn_started2: boolean = false;
  btn_started3: boolean = false;
  cambiarColor: string;
  cambiarColor2: string;
  businessObject = {};
  errorMessage: string;
  id = this._route.snapshot.paramMap.get('id');
  category = this._route.snapshot.paramMap.get('type');
  postNumber = 1 + +this._route.snapshot.paramMap.get('number');
  allRecipes = [];
  selectedRecipe = {};
  pageReady = false;
  currentTimeout: number;
  defaultImage = '../../assets/no-image.jpg';
  template: string = `<img src="http://pa1.narvii.com/5722/2c617cd9674417d272084884b61e4bb7dd5f0b15_hq.gif" />`;

  selectRandomRecipe() {
    let index = Math.floor(Math.random() * this.allRecipes.length + 1);
    this.selectedRecipe = this.allRecipes[index];
    console.log(this.selectedRecipe);
  }
  //modal
  open() {
    this.display = 'block';
  }
  onCloseHandled() {
    this.display = 'none';
  }
  //modal

  setTimer() {
    this.currentTimeout = window.setTimeout(() => {
      this.spinnerService.hide();
      this.pageReady = true;
    }, 4000);
  }

  setChallengeComplete(challenge) {
    switch (challenge) {
      case 1:
        localStorage.setItem('challenge1-' + this.category, 'true');
        break;
      case 2:
        localStorage.setItem('challenge2-' + this.category, 'true');
        break;
      case 3:
        localStorage.setItem('challenge3-' + this.category, 'true');
        break;
      case 4:
        localStorage.setItem('challenge4-' + this.category, 'true');
        break;
      case 5:
        localStorage.setItem('challenge5-' + this.category, 'true');
        break;
      default:
        break;
    }
    localStorage.setItem('testTrue', 'true');
  }

  ngOnInit() {
    this.spinnerService.show();
    this._businessService.getBusinessById(this.id).subscribe(business => {
      this.businessObject = business;
      console.log(this.businessObject);
    }, error => (this.errorMessage = <any>error));

    this._businessService.getJsonRecipe(this.category).subscribe(recipes => {
      this.allRecipes = recipes;
      this.selectRandomRecipe();
      this.setTimer();
    }, error => (this.errorMessage = <any>error));
  }
  public hideMark(id: number) {
    switch (id) {
      case 1: {
        this.btn_go1 = false;
        this.btn_go2 = true;
        this.btn_go3 = false;
        this.btn_started1 = true;
        break;
      }

      case 2: {
        this.btn_go1 = false;
        this.btn_go2 = false;
        this.btn_go3 = true;
        this.p_disabled = false;
        this.btn_started1 = false;
        this.btn_started2 = true;
        this.btn_started3 = true;
        this.cambiarColor = '#2cb2ff';
        this.cambiarColor2 = '#f2f2f2';
        this.setChallengeComplete(this.postNumber);
        break;
      }
    }
  }
}
