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
  display= 'none';
  hidden= 'block';
  btn_go1:boolean = true;
  btn_go2:boolean= false;
  btn_go3:boolean= false;
  p_disabled:boolean = true;
  p_disabled1:boolean = true;
  btn_started1:boolean = false;
  btn_started2:boolean = false;
  btn_started3:boolean = false;
  cambiarColor: string;
  cambiarColor2: string;
  businessObject = {};
  errorMessage: string;
  id = this._route.snapshot.paramMap.get('id');
  category = this._route.snapshot.paramMap.get('type');
  allRecipes = [];
  selectedRecipe = {};

selectRandomRecipe(){
let index = Math.floor((Math.random() * this.allRecipes.length) + 1);
this.selectedRecipe = this.allRecipes[index];
console.log(this.selectedRecipe);
}

  ngOnInit() {
    console.log(this.id);
    this._businessService.getBusinessById(this.id)
      .subscribe(business => {
          this.businessObject = business;
          console.log(this.businessObject);
        },
        error => this.errorMessage = < any > error);

        this._businessService.getJsonRecipe(this.category)
         .subscribe(recipes => {
          this.allRecipes = recipes;
          this.selectRandomRecipe();
        },
        error => this.errorMessage = < any > error);
  }
  public hideMark(id: number){
    switch (id){
      case 1: {
        this.btn_go1 = false;
        this.btn_go2 = true;
        this.btn_go3 = false;
        this.btn_started1  = true;
        break;
      }
      
      case 2: {
        this.btn_go1 = false;
        this.btn_go2 = false;
        this.btn_go3 = true;
        this.p_disabled = false;
        this.btn_started1  = false;
        this.btn_started2  = true;
        this.btn_started3 = true;
        this.cambiarColor = '#2cb2ff';
        this.cambiarColor2 = '#f2f2f2'
        break;
      }
  }
  }
  }
