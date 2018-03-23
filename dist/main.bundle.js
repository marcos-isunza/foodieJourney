webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n/* You can add global styles to this file, and also import other style files */\r\n\r\n.navbar{\r\n    padding: 1em;\r\n    color: white;\r\n    background-color:#fd513f;\r\n    width:100%;\r\n    height: 50px;\r\n    margin-bottom: 0%;\r\n}\r\n\r\nbody{\r\n    background-color: #F2F2F2 !important;\r\n}\r\n\r\n.navbar a {\r\n    color:white ;\r\n}\r\n\r\n.navbar a:hover {\r\n    color:rgb(252, 140, 128) ;\r\n}\r\n\r\n.sidenav {\r\n    height: 100%;\r\n    width: 0;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #cb3729;\r\n    overflow-x: hidden;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n    padding-top: 60px;\r\n}\r\n\r\n.sidenav a {\r\n    padding: 8px 8px 8px 32px;\r\n    text-decoration: none;\r\n    font-size: 20px;\r\n    color:white;\r\n    display: block;\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n    font-style: 'ProximaNova', sans-serif;\r\n}\r\n\r\n.sidenav a:hover {\r\n    color: #f1f1f1;\r\n}\r\n\r\n.sidenav .closebtn {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 25px;\r\n    font-size: 36px;\r\n    margin-left: 50px;\r\n}\r\n\r\n#main {\r\n    -webkit-transition: margin-left .5s;\r\n    transition: margin-left .5s;\r\n\r\n}\r\n\r\n@media screen and (max-height: 450px) {\r\n  .sidenav {padding-top: 15px;}\r\n  .sidenav a {font-size: 18px;}\r\n}\r\n\r\n.modal {\r\n    position: absolute;\r\n    top: 10px;\r\n    margin-right: 2%;\r\n    margin-left: 80%;\r\n    /* z-index: 10040;\r\n    overflow: auto;\r\n    overflow-y: auto; */\r\n    min-width: 250px; \r\n    max-width: 250px;\r\n }\r\n\r\n.modal-content{\r\n    height: auto;\r\n    border-radius: 0% ;\r\n}\r\n\r\n.modal-header{\r\n    padding: 3%;\r\n    border: none;\r\n}\r\n\r\n.login_in{\r\n    width: 100%;\r\n    height: 120%;\r\n    padding: 3%;\r\n    font-size: 14px; \r\n    margin: 1%;\r\n}\r\n\r\n#btn_login{\r\n    width: 100%;\r\n    padding: 3%;\r\n    background-color: #fd513f;\r\n\t  border-radius: 0;\r\n    border-style: none;\r\n    color: white;\r\n    font-size: 14px;\r\n    margin-top: 5%;\r\n}\r\n\r\n#or{\r\n    text-align: center;\r\n    margin: auto;\r\n    color: gray;\r\n    font-size: 14px;\r\n    margin-bottom: 5%;\r\n    padding-top: 0%;\r\n}\r\n\r\n.redes{\r\n    text-align: center;\r\n    margin-left: 15%;\r\n}\r\n\r\n.twitter{\r\n     color:  #fd513f;\r\n     border: 1px solid gray;\r\n     height: 40px;\r\n     width: 25%;\r\n     float: left;\r\n     margin: auto;\r\n     background: none;\r\n\t background-repeat: no-repeat;\r\n\t background-size: cover;\r\n\t background-position: center;    \r\n}\r\n\r\n#twitter{\r\n    background-image: url('http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c53e.png');\r\n    background-size: 70%;\r\n}\r\n\r\n#facebook{\r\n    background-image: url('https://vignette.wikia.nocookie.net/the-miners-haven-project/images/5/55/Facebook.png/revision/latest?cb=20170404025038');\r\n    background-size: 60%;\r\n    margin-left: 5%; \r\n}\r\n\r\n#google{\r\n    background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyhXa9W9zG1hoZFYXUBMeVXeFE5V3pnfrKQfSPl-EGUrqKnwMh');\r\n    background-size: 60%;\r\n    margin-left: 5%; \r\n    font-size: 18px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"main\">\r\n  <div id=\"mySidenav\" class=\"sidenav\">\r\n    <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\r\n    <a href=\"/team\">About</a>\r\n  </div>\r\n  <nav class=\"navbar\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"navbar-header\">\r\n        <span style=\"font-size:20px;cursor:pointer\"  (click)=\"openNav()\">&#9776;</span>\r\n          <a class=\"links navbar-brand\" href=\"home\">FoodieJournal</a>\r\n      </div>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li>\r\n          <a class=\"links\" (click)=\"open();\" *ngIf=\"!isLogin\">\r\n            <span class=\"glyphicon glyphicon-user\"></span>{{logname}}</a>\r\n        </li>\r\n        <li>\r\n          <a class=\"links\" (click)=\"logout();\" *ngIf=\"isLogin\" [routerLink]=\"['/home']\">\r\n            <span class=\"glyphicon glyphicon-user\"></span>{{logname}}</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n  <!--Login Modal-->\r\n  <div class=\"backdrop\" [ngStyle]=\"{'display':display}\"></div>\r\n  <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" id=\"modal\" [ngStyle]=\"{'display':display}\">\r\n    <div class=\"modal-dialog modal-sm\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onCloseHandled()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body text-center\">\r\n          <input class=\"login_in\" placeholder=\"Email or Username\" type=\"email\">\r\n          <br>\r\n          <input class=\"login_in\" placeholder=\"Password\" type=\"password\">\r\n          <button id=\"btn_login\" (click)=\"login();\" [routerLink]=\"['/challenges']\">Log In</button>\r\n        </div>\r\n\r\n        <span id=\"or\">or log in with</span>\r\n\r\n        <div class=\"redes\">\r\n          <button type=\"button\" class=\"twitter\" id=\"twitter\" aria-label=\"twitter\"></button>\r\n          <button type=\"button\" class=\"twitter\" id=\"facebook\" aria-label=\"twitter\"></button>\r\n          <button type=\"button\" class=\"twitter\" id=\"google\" aria-label=\"twitter\"></button>\r\n        </div>\r\n        <br>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n  <!-- /.modal !-->\r\n\r\n  <router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_yelp_service__ = __webpack_require__("../../../../../src/app/service/yelp-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_businessService) {
        this._businessService = _businessService;
        this.title = 'app';
        this.display = 'none';
        this.logname = 'Log In';
        this.sendTo = 'home';
        this.isLogin = false;
    }
    AppComponent.prototype.open = function () {
        this.display = 'block';
    };
    AppComponent.prototype.onCloseHandled = function () {
        this.display = 'none';
    };
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent.prototype.openNav = function () {
        document.getElementById('mySidenav').style.width = '150px';
        document.getElementById('main').style.marginLeft = '150px';
    };
    AppComponent.prototype.closeNav = function () {
        document.getElementById('mySidenav').style.width = '0';
        document.getElementById('main').style.marginLeft = '0';
    };
    AppComponent.prototype.logout = function () {
        this.logname = 'Log In';
        this.sendTo = 'challenges';
        this.isLogin = false;
        localStorage.setItem('login', 'false');
    };
    AppComponent.prototype.login = function () {
        this.sendTo = 'challenges';
        this.logname = 'Log Out';
        this.isLogin = true;
        this.display = 'none';
        localStorage.setItem('login', 'true');
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__service_yelp_service__["a" /* YelpServiceComponent */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_yelp_service__["a" /* YelpServiceComponent */]])
    ], AppComponent);
    return AppComponent;
}());

// start(){
//   if(this.logname == 'Log In'){
//     open();
//   }
//   else{
//     [routerLink]="['/challenges']"
//   }
// }
// }


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipes_pipes__ = __webpack_require__("../../../../../src/app/pipes/pipes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cust_ext_browser_xhr__ = __webpack_require__("../../../../../src/cust-ext-browser-xhr.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__maps_maps_component__ = __webpack_require__("../../../../../src/app/maps/maps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__homepage_homepage_component__ = __webpack_require__("../../../../../src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__challenges_challenges_component__ = __webpack_require__("../../../../../src/app/challenges/challenges.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__businesses_businesses_component__ = __webpack_require__("../../../../../src/app/businesses/businesses.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__details_details_component__ = __webpack_require__("../../../../../src/app/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__rating_rating_component__ = __webpack_require__("../../../../../src/app/rating/rating.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__team_team_component__ = __webpack_require__("../../../../../src/app/team/team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_0__pipes_pipes__["a" /* IsOpenPipe */],
                __WEBPACK_IMPORTED_MODULE_7__maps_maps_component__["a" /* MapsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__homepage_homepage_component__["a" /* HomepageComponent */],
                __WEBPACK_IMPORTED_MODULE_10__challenges_challenges_component__["a" /* ChallengesComponent */],
                __WEBPACK_IMPORTED_MODULE_11__businesses_businesses_component__["a" /* BusinessesComponent */],
                __WEBPACK_IMPORTED_MODULE_12__details_details_component__["a" /* DetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__rating_rating_component__["a" /* RatingComponent */],
                __WEBPACK_IMPORTED_MODULE_16__team_team_component__["a" /* TeamComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_8__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyAY_alI2LupenkD1LKLTOzZI9yujH2ljJg'
                }),
                __WEBPACK_IMPORTED_MODULE_13__angular_router__["c" /* RouterModule */].forRoot([
                    { path: 'challenges', component: __WEBPACK_IMPORTED_MODULE_10__challenges_challenges_component__["a" /* ChallengesComponent */] },
                    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_9__homepage_homepage_component__["a" /* HomepageComponent */] },
                    { path: 'businesses/:ctg', component: __WEBPACK_IMPORTED_MODULE_11__businesses_businesses_component__["a" /* BusinessesComponent */] },
                    { path: 'team', component: __WEBPACK_IMPORTED_MODULE_16__team_team_component__["a" /* TeamComponent */] },
                    { path: 'details/:id/:type/:number', component: __WEBPACK_IMPORTED_MODULE_12__details_details_component__["a" /* DetailsComponent */] },
                    { path: ' ', redirectTo: 'home', pathMatch: 'full' },
                    { path: '**', redirectTo: 'home', pathMatch: 'full' }
                ]),
                __WEBPACK_IMPORTED_MODULE_14__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_17_ng4_loading_spinner__["Ng4LoadingSpinnerModule"].forRoot()
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* BrowserXhr */], useClass: __WEBPACK_IMPORTED_MODULE_5__cust_ext_browser_xhr__["a" /* CustExtBrowserXhr */] }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/businesses/businesses.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n  margin: 0;\r\n}\r\n\r\n.topnav {\r\n  padding-top: 20px;\r\n  width: 100%;\r\n}\r\n\r\n/deep/ .card-header:first-child a:-webkit-any-link {\r\n  color: black;\r\n}\r\n\r\n/deep/ .card-header:first-child {\r\n  background-color: white;\r\n}\r\n\r\n.panelFondo {\r\n  background-color: grey;\r\n}\r\n\r\n.topnav a {\r\n  float: left;\r\n  display: block;\r\n  color: #53515186;\r\n  text-align: center;\r\n  padding: 4px 20px;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n  margin: 4px;\r\n  border: 1px solid #7e7c7cc9;\r\n}\r\n\r\n.topnav a:hover {\r\n  background-color: #fd513f;\r\n  color: white;\r\n  border: 1px solid #fd513f;\r\n}\r\n\r\n.topnav .icon {\r\n  display: none;\r\n}\r\n\r\n.progress {\r\n  color: darkgray;\r\n  background-color: white;\r\n  font-size: 18px;\r\n  display: inline;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .topnav a {\r\n    display: none;\r\n  }\r\n  .topnav a.icon {\r\n    float: left;\r\n    display: none;\r\n  }\r\n  .selectResp {\r\n    display: block;\r\n  }\r\n  .mapCol{\r\n    display: none;\r\n  }\r\n  .imgCol{\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 601px) {\r\n  .selectResp {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .topnav.responsive {\r\n    position: relative;\r\n  }\r\n  .topnav.responsive .icon {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n  }\r\n  .topnav.responsive a {\r\n    float: none;\r\n    display: block;\r\n    text-align: left;\r\n  }\r\n}\r\n\r\n.Challenge_name {\r\n  font-size: 20px;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.Challenge_desc {\r\n  font-size: 15px;\r\n}\r\n\r\n/deep/ .card {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.acomodar {\r\n  padding-top: 20px;\r\n  padding-bottom: 20px;\r\n}\r\n\r\n.circle {\r\n  width: 80px;\r\n  height: 80px;\r\n  border-radius: 40px;\r\n  background-color: #cb3728;\r\n}\r\n\r\n.btn-outline-primary {\r\n  border: 0;\r\n  color: grey;\r\n}\r\n\r\n.dropdown-item {\r\n  margin: 2px;\r\n  border-color: rgb(179, 179, 179);\r\n}\r\n\r\n.dropdown-item:hover {\r\n  background-color: rgb(179, 179, 179);\r\n  color: white;\r\n}\r\n\r\n.btn-outline-primary:hover {\r\n  background-color: rgba(201, 199, 199, 0.233);\r\n}\r\n\r\n.btnDure {\r\n  color: black;\r\n  background-color: #f2f2f2;\r\n  border-radius: 0px;\r\n  width: 100%;\r\n}\r\n\r\n.btn_style {\r\n  background-color: #fd513f;\r\n  color: white;\r\n  border-radius: 0px;\r\n  width: 100%;\r\n}\r\n\r\n.business-info {\r\n  background-color: #f8f9fa;\r\n  height: 140px;\r\n  border: none;\r\n  border-radius: 0px;\r\n  padding-left: 20px;\r\n  padding-top: 15px;\r\n}\r\n\r\n.thumb-post img {\r\n  -o-object-fit: fill;\r\n     object-fit: fill;\r\n  /* Do not scale the image */\r\n  -o-object-position: center;\r\n     object-position: center;\r\n  /* Center the image within the element */\r\n  width: 237px;\r\n  max-height: 156px;\r\n  /* margin-bottom: 1rem; */\r\n}\r\n\r\n.panel-name {\r\n  font-size: 18px;\r\n  font-weight: bolder;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.panel-rating {\r\n  margin-bottom: 5px;\r\n  color: darkgray;\r\n}\r\n\r\n.panel-price {\r\n  margin-bottom: 5px;\r\n  color: darkgray;\r\n  font-size: 12px;\r\n}\r\n\r\n.panel-address {\r\n  font-size: 12px;\r\n  font-weight: bolder;\r\n}\r\n\r\n.panel-open {\r\n  color: green;\r\n}\r\n\r\n.panel-contact {\r\n  color: cornflowerblue;\r\n  font-size: 12px;\r\n}\r\n\r\nngb-accordion .card {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.rev-count {\r\n  clear: both;\r\n  padding-left: 15px;\r\n  color: darkgray;\r\n}\r\n\r\n.angle {\r\n  font-size: 48px;\r\n  padding-top: 55px;\r\n  padding-left: 15px;\r\n  clear: both;\r\n  color: darkgray;\r\n}\r\n\r\n.row {\r\n  margin: 0%;\r\n}\r\n\r\n.dropdown-menu {\r\n  border-radius: 0;\r\n}\r\n\r\n.show > .btn-outline-primary.dropdown-toggle {\r\n  color: grey;\r\n  background-color: white;\r\n  border-color: white;\r\n}\r\n\r\n.dropbtn {\r\n  background-color: #fd513f;\r\n  color: white;\r\n  padding: 7px;\r\n  font-size: 16px;\r\n  border: none;\r\n  width: 109px;\r\n}\r\n\r\n.dropdown {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n\r\n.dropdown-content {\r\n  display: none;\r\n  position: absolute;\r\n  background-color: #f1f1f1;\r\n  min-width: 330% !important;\r\n  -webkit-box-shadow: 0px 8px 16px 0px rgba(230, 226, 226, 0.2);\r\n          box-shadow: 0px 8px 16px 0px rgba(230, 226, 226, 0.2);\r\n  z-index: 2;\r\n}\r\n\r\n.res_drop a {\r\n  width: 100%;\r\n  color: rgb(183, 185, 183) !important;\r\n  background-color: white;\r\n  margin: 0px !important;\r\n  padding: 30px !important;\r\n}\r\n\r\n.toLeft {\r\n  float: left;\r\n}\r\n\r\n.dropdown-content a {\r\n  color: black;\r\n  padding: 12px 16px;\r\n  text-decoration: none;\r\n  display: block;\r\n}\r\n\r\n.dropdown-content a:hover {\r\n  background-color: #ddd;\r\n}\r\n\r\n.dropdown:hover .dropdown-content {\r\n  display: block;\r\n}\r\n\r\n.dropdown:hover .dropbtn {\r\n  background-color: #ac2727;\r\n}\r\n\r\n.orden {\r\n  background-color: gray;\r\n  border-radius: 50%;\r\n  width: 20px;\r\n  height: 20px;\r\n  color: white;\r\n  text-align: center;\r\n  vertical-align: text-top;\r\n  display: inline-block;\r\n  font-size: 13px;\r\n}\r\n\r\nh1 {\r\n  color: #63b8ff;\r\n  text-align: center;\r\n}\r\n\r\n.progress-circle {\r\n  position: relative;\r\n  display: inline-block;\r\n  margin: 1rem;\r\n  width: 100px;\r\n  height: 100px;\r\n  border-radius: 50%;\r\n  background-color: #ebebeb;\r\n}\r\n\r\n.progress-circle:after {\r\n  content: '';\r\n  display: inline-block;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 50%;\r\n  -webkit-animation: colorload 2s;\r\n  animation: colorload 2s;\r\n}\r\n\r\n.progress-circle span {\r\n  font-size: 1.5rem;\r\n  color: #8b8b8b;\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  display: block;\r\n  width: 60px;\r\n  height: 60px;\r\n  line-height: 60px;\r\n  margin-left: -30px;\r\n  margin-top: -30px;\r\n  text-align: center;\r\n  border-radius: 50%;\r\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB2CAYAAADyZQwvAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAACMlJREFUeJztnXlUVNcBh39vhmE2doYlyBJAEKLGE2sDrR6jbTAnNlqbaLpY7RYj3Y57G4+VuqdSS88xJ8sxjWmr5jQmbV3Sc5ITSSL1uKCitcGwBBAQBBmYlRmGWV7/SAUfwzrMzL1zz/3+4l7eu/f35mPue/fNm4twuTBfBIdJZKQDcAIHl8swXC7DcLkMw+UyDJfLMFwuw3C5DMPlMgyXyzBcLsNwuQzD5TIMl8swXC7DcLkMw+UyDJfLMFwuw3C5DMPlMgyXyzBcLsNwuQzD5TIMl8swYaQD+BWZDMrkFCgSkyBXayBTa0bd3ONwwGO3wanvgqO9FaLLFaSgwSHk5aqnTkPcwkWInFMAbf4MCIpwn9oR3W7YG+pgqaqE8Ww5LP+5Coih/TUqIRS/CCbI5YgrWoyk7/0YmpxpAemjv6MdnW8fQdfJ4/DY7QHpI9CEnNyoL38F6Zu2QZWRFZT+nPou3H6lDN3vnwq5d3LIyJUpVUhb/wISlj076nYuYw+c3Xo4DT1wm01jtinTaqFMTkF4csqo25ounkPTzhfgMvZMODspQkJueEISpv7hVWhy8rx/KYowXTwHY0U5zJcvwNHW6lMfCl0Cor5UgOi5CxC7oAiCQuG1jVN/F/WbfwZb7U2f+gg21MtVpqRi2st/9n5niSL0/zqBzrcOw97UMGY76uxcyDVaWD+9PubwqtAlIuk7q5G4YiVk4UrJ79y9VtRvLIb1RtWEjyXYUC03LCYO+a+/BWVquqTe0daKW/u2w1JVOa52klevQepPNwAAuj94D007fjWu/dSZ2Xhw215opz8sqXdbLagpXgV7Q9242iEFtTcxBJkcWbsPeIk1X7mI6lXf8hKrzs5FxMxHAEHwaith6fKBn+OLFkOmVHltM9z+9qYG1Dy/El0n35FsK4+IxNTfHYQ8ItKnYwsW1MpNXv0couYUSuoMZ8+gfmMxPHbbkG3XYPrRE8g7dAyZv93v1VbfrcaBnx132uBx9o97f9HjRvP+Heg48idJvTI1HRlbtvt0bMGCSrmqtAw88KNiSZ2lqhKN2zdBHCIGGPud2bRnG+6+cwz6U++ifuNawOOZ0P4QRdx+pQxdJ45LquMWPYXownkTOrZgQqXclLXrJBcyLmMPGks2Q3Q6h91+rHemy9iDlrK9uPViCfpabk14/3u0lO2Drb5WUpf6i82AjMqXEfLnUxN2kA5xP+rMbGRs+o3k3NdcugvWG9dG3MdceQEypRL2hjq0HNgNl9EwoT7Hvb/HDVtNNRKWPDOQTxEXD3tjHfrGccUebKi7Wk5bvxVJ3141ULbV1+LmD56m6u5Q1s5SxC16aqBsrjyPunXPEUw0PFSNJ4JMjvgnviGp6zz2BlViAaDj6GFJOWpOIRS6REJpRoYquZq8hxAWEzdQdlstMHz8IcFEw2Orr4Gt7rPBCpkM0YVzyQUaAao+8ouc/aik7LjThuh5C8iEGYP+zg5ocvMHypGzH4X+vX8STOQNVXLV2bmSsiYnD9l7/0gozcQYmp0GqBqWVWkZpCP4zNA7aTRAldyw6BjSEXxGrtH6/BRIoKBqWLZcuyy9UAkxBLkM4vD3WYhA3TyX4z+oGpY5/oXLZRiqzrkx878OIcz/kYwV5ZJnkoPVD2moOuc+8uGlgHwAfq2oAG6rJej9kIYPywzD5TIMVedcY0U5ZCq139sVXdLJZ7D6IQ1V51yOf+HDMsNwuQxD5JwbqHkmrZCa/xJ5hTO376P+gW5/Qmr+y4dlhuFyGYbIsByoeSatkJr/8nkuw/BhmWG4XIaharIZM/9rEMK8lysYFY8H7l6r/0LI5JBrtT7tajr3CTz9Dv9lmSRUyZ2ydh3UWTmkY/iGx4Mr82aSTiGBqmHZZTKSjuAzLrOJuu80USXX2dVJOoLPOLu7SEfwgqpheeiqNI62VmqXBVI9mCU5hdC4+AlVcntv/ldSdplNaNi2gVCa0Zm6/yWJXGv1DYJphoeqYdl6/So8jr6BsjZvOlTpmQQTDU9YVDSihqyFYa48TyjNyFAl19PvgPHfHw9WCAISV6wkF2gEdN9cIVmzw95YL1lXgxaokgsA+tN/l5R1S55GeNIDhNJ4I9dGIPm7P5TU6U//g0yYMaBOrvnyBclFlEypQtqGrQQTSUlZ80uExQ5++99lMkJ/6l2CiUaGOrkQRbQdOiipin3sceiWPEMo0CBRBXOR9Oz3JXUdR9+A29ZLKNHo0CcXgOl8BQxnz0jqMraUIHJOAaFEXyyhlL2nTLp8YOPn6PzbX4hlGgsq5QJAy+93wakfvDEgKBTIKX2ZiGB1di5yDx6WPBokOvvRtHsrVd8NGgq1cp3d+v8vBzj4QbdMrUFu2SEkLl857AKegSD2sceR99oRKHQJkvrmA3tgq6kOSgZfoW4Fufvp72hHX3MjYhcWQRC++DsU5HJEf3U+Ih6eDVvtTbgMgVm5PDwhCelbSjCleL3Xmstthw7i7tt/DUi//iQknsSIXVCEzJ2lXi8yPB4YPjmDrpPHYbl6CaLbPbmOBAHa/BnQLV2O+CeXevcnimh7/SXcefO1yfUTJEJCLgBoZ8xC9p6yEee8LrMJ1htVsNfXor/zDlwW87jalas1UCQlQ52Vg8hZs0dcCc5tteDWiyUwfPSBz8cQbEJGLgDII6OQtu7X0C1eFrRzLgCYL51Dc+kuONpvB61PfxBScu+hnTELKT/5ecDXOrbVVKP9zVdhrPgooP0EipCUew91Vg7iFy9D7MIiKFNS/dKmy9ADQ0U5et4/Dcv1K35pkxQhLfd+lFPSoH1oJlTpmVDoEiCPjIIwjqHbbbXAaeyBo6UZvZ99CnvT59Q9UeErVH2eOxkcba0+/08hVqH2JgZn8nC5DMPlMgyXyzBcLsNwuQzD5TIMl8swXC7DcLkMw+UyDJfLMFwuw3C5DMPlMgyXyzBcLsNwuQzD5TIMl8swXC7DcLkMw+UyDJfLMFwuw3C5DMPlMgyXyzBcLsP8D6Yl0lOFK1C9AAAAAElFTkSuQmCC');\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  z-index: 1;\r\n}\r\n\r\n.progress-circle span:after {\r\n  /* content: '%'; */\r\n  font-weight: 600;\r\n  color: #8b8b8b;\r\n}\r\n\r\n.progress-circle.progress-0:after {\r\n  background-image: -webkit-gradient(\r\n      linear,\r\n      left top, right top,\r\n      color-stop(50%, #ebebeb),\r\n      color-stop(50%, transparent),\r\n      to(transparent)\r\n    ),\r\n    -webkit-gradient(linear, left top, right top, color-stop(50%, #cb3729), color-stop(50%, #ebebeb), to(#ebebeb));\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(90deg, #cb3729 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-1:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(93.6deg, #cb3729 100%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-2:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(97.2deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-3:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(100.8deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-4:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(104.4deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-5:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(108deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-6:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(111.6deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-7:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(115.2deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-8:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(118.8deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-9:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(122.4deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-10:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(126deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-11:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(129.6deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-12:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(133.2deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-13:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(136.8deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-14:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(140.4deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-15:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(129.6deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-16:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(133.2deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-17:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(136.8deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-18:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(140.4deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-19:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(144deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-20:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(151.2deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-21:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(158.6deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-22:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(161.2deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-23:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(165.6deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-24:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(169.2deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-25:after {\r\n  background-image: -webkit-gradient(\r\n      linear,\r\n      left top, right top,\r\n      color-stop(50%, #ebebeb),\r\n      color-stop(50%, transparent),\r\n      to(transparent)\r\n    ),\r\n    -webkit-gradient(linear, left top, left bottom, color-stop(50%, #ee5d4a), color-stop(50%, #ebebeb), to(#ebebeb));\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(180deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-26:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(183.6deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-27:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(187.2deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-28:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(190.8deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-29:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(194.4deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-30:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(198deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-31:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(201.6deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-32:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(205.2deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-33:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(208.8deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-34:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(212.4deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-35:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(216deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-40:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(234deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-36:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(219.6deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-37:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(223.2deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-38:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(226.8deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-39:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(230.4deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-41:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(237.6deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-42:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(241.2deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-43:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(244.8deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-44:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(248.4deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-45:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(252deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-46:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(255.6deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-47:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(259.2deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-48:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(262.8deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-49:after {\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ebebeb 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(266.4deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-50:after {\r\n  background-image: -webkit-gradient(\r\n      linear,\r\n      right top, left top,\r\n      color-stop(50%, #ee5d4a),\r\n      color-stop(50%, transparent),\r\n      to(transparent)\r\n    ),\r\n    -webkit-gradient(linear, right top, left top, color-stop(50%, #ee5d4a), color-stop(50%, #ebebeb), to(#ebebeb));\r\n  background-image: linear-gradient(\r\n      -90deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-51:after {\r\n  background-image: linear-gradient(\r\n      -86.4deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-52:after {\r\n  background-image: linear-gradient(\r\n      -82.6deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-53:after {\r\n  background-image: linear-gradient(\r\n      -79.2deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-54:after {\r\n  background-image: linear-gradient(\r\n      -75.6deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-55:after {\r\n  background-image: linear-gradient(\r\n      -72deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-56:after {\r\n  background-image: linear-gradient(\r\n      -68.4deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-57:after {\r\n  background-image: linear-gradient(\r\n      -64.8deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-58:after {\r\n  background-image: linear-gradient(\r\n      -61.2deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-59:after {\r\n  background-image: linear-gradient(\r\n      -57.6deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-60:after {\r\n  background-image: linear-gradient(\r\n      -54deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-61:after {\r\n  background-image: linear-gradient(\r\n      -50.4deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-62:after {\r\n  background-image: linear-gradient(\r\n      -46.8deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-63:after {\r\n  background-image: linear-gradient(\r\n      -43.2deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-64:after {\r\n  background-image: linear-gradient(\r\n      -39.6deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-65:after {\r\n  background-image: linear-gradient(\r\n      -36deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-66:after {\r\n  background-image: linear-gradient(\r\n      -32.4deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-67:after {\r\n  background-image: linear-gradient(\r\n      -28.8deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-68:after {\r\n  background-image: linear-gradient(\r\n      -25.2deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-69:after {\r\n  background-image: linear-gradient(\r\n      -21.6deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-70:after {\r\n  background-image: linear-gradient(\r\n      -18deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-71:after {\r\n  background-image: linear-gradient(\r\n      -14.4deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-72:after {\r\n  background-image: linear-gradient(\r\n      -10.8deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-73:after {\r\n  background-image: linear-gradient(\r\n      -7.2deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-74:after {\r\n  background-image: linear-gradient(\r\n      -3.6deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-75:after {\r\n  background-image: -webkit-gradient(\r\n      linear,\r\n      left bottom, left top,\r\n      color-stop(50%, #ee5d4a),\r\n      color-stop(50%, transparent),\r\n      to(transparent)\r\n    ),\r\n    -webkit-gradient(linear, right top, left top, color-stop(50%, #ee5d4a), color-stop(50%, #ebebeb), to(#ebebeb));\r\n  background-image: linear-gradient(\r\n      0deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-76:after {\r\n  background-image: linear-gradient(\r\n      3.6deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-77:after {\r\n  background-image: linear-gradient(\r\n      7.2deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-78:after {\r\n  background-image: linear-gradient(\r\n      10.8deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-79:after {\r\n  background-image: linear-gradient(\r\n      14.4deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-80:after {\r\n  background-image: linear-gradient(\r\n      18deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-81:after {\r\n  background-image: linear-gradient(\r\n      21.6deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-82:after {\r\n  background-image: linear-gradient(\r\n      25.2deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-83:after {\r\n  background-image: linear-gradient(\r\n      28.8deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-84:after {\r\n  background-image: linear-gradient(\r\n      32.4deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-85:after {\r\n  background-image: linear-gradient(\r\n      36deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-86:after {\r\n  background-image: linear-gradient(\r\n      39.2deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-87:after {\r\n  background-image: linear-gradient(\r\n      43.2deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-88:after {\r\n  background-image: linear-gradient(\r\n      46.8deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-89:after {\r\n  background-image: linear-gradient(\r\n      50.4deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-90:after {\r\n  background-image: linear-gradient(\r\n      54deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-91:after {\r\n  background-image: linear-gradient(\r\n      57.6deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-92:after {\r\n  background-image: linear-gradient(\r\n      61.2deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-93:after {\r\n  background-image: linear-gradient(\r\n      64.8deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-94:after {\r\n  background-image: linear-gradient(\r\n      68.4deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-95:after {\r\n  background-image: linear-gradient(\r\n      72deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-96:after {\r\n  background-image: linear-gradient(\r\n      75.6deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-97:after {\r\n  background-image: linear-gradient(\r\n      79.2deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-98:after {\r\n  background-image: linear-gradient(\r\n      82.8deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-99:after {\r\n  background-image: linear-gradient(\r\n      86.4deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n.progress-circle.progress-100:after {\r\n  background-image: -webkit-gradient(\r\n      linear,\r\n      left top, right top,\r\n      color-stop(50%, #ee5d4a),\r\n      color-stop(50%, transparent),\r\n      to(transparent)\r\n    ),\r\n    -webkit-gradient(linear, right top, left top, color-stop(50%, #ee5d4a), color-stop(50%, #ebebeb), to(#ebebeb));\r\n  background-image: linear-gradient(\r\n      90deg,\r\n      #ee5d4a 50%,\r\n      transparent 50%,\r\n      transparent\r\n    ),\r\n    linear-gradient(270deg, #ee5d4a 50%, #ebebeb 50%, #ebebeb);\r\n}\r\n\r\n@-webkit-keyframes colorload {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n.orden {\r\n  background-color: gray;\r\n  border-radius: 50%;\r\n  width: 20px;\r\n  height: 20px;\r\n  color: white;\r\n  text-align: center;\r\n  vertical-align: text-top;\r\n  display: inline-block;\r\n  font-size: 13px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/businesses/businesses.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"cajatop\">\r\n  <div class=\"row\" style=\"width: 100%; background-color: white;\">\r\n    <div class=\"container\">\r\n      <div class=\"topnav container\" id=\"myTopnav\">\r\n        <div class=\"selectResp toLeft\">\r\n          <div class=\"\"></div>\r\n          <div class=\"dropdown .selectResp d-inline-block\">\r\n            <button class=\"dropbtn\">Journeys\r\n              <i class=\"fa fa-sort-desc\" aria-hidden=\"true\"></i>\r\n            </button>\r\n            <div class=\"dropdown-content\">\r\n              <div class=\"res_drop\">\r\n                <a href=\"businesses/burgers\" class=\"active\">American</a>\r\n              </div>\r\n              <div class=\"res_drop\">\r\n                <a href=\"businesses/korean\">Korean</a>\r\n              </div>\r\n              <div class=\"res_drop\">\r\n                <a href=\"businesses/italian\">Italian</a>\r\n              </div>\r\n              <div class=\"res_drop\">\r\n                <a href=\"businesses/mexican\">Mexican</a>\r\n              </div>\r\n              <div class=\"res_drop\">\r\n                <a href=\"businesses/japanese\">Japanese</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <a href=\"businesses/burgers\" class=\"active\">American</a>\r\n        <a href=\"businesses/korean\">Korean</a>\r\n        <a href=\"businesses/italian\">Italian</a>\r\n        <a href=\"businesses/mexican\">Mexican</a>\r\n        <a href=\"businesses/japanese\">Japanese</a>\r\n        <a style=\"font-size:15px;\" class=\"icon\" (click)=\"myFunction()\">&#9776;</a>\r\n        <div style=\"float: right;\">\r\n          <div ngbDropdown class=\"d-inline-block\">\r\n            <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle>Most Recent </button>\r\n            <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n              <button class=\"dropdown-item\">Most Recent</button>\r\n              <button class=\"dropdown-item\">Highest Rated</button>\r\n              <button class=\"dropdown-item\">Top Reviewed</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row col-md-12 col-sm-12 col-12 acomodar\">\r\n        <div class=\"row col-md-6 col-sm-12 col-12\">\r\n          <div class=\"col-md-3 col-sm-3 col-5\">\r\n            <!-- <label class=\"circle\"></label> -->\r\n            <div class=\"progress-circle progress-{{progress}}\">\r\n              <span [ngStyle]=\"{'background-image': bimage}\"></span>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-9 col-sm-9 col-7\">\r\n            <p class=\"Challenge_name\">{{TitleJournal}} <span class=\"progress\">{{progress}}%</span></p>\r\n            <p class=\"Challenge_desc\">{{DescJournal}}\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row col-md-6 col-sm-12 col-12\">\r\n          <div class=\"col-md-8 col-sm-0 col-0\"></div>\r\n          <div class=\"col-md-4 col-sm-6 col-12\">\r\n            <button class=\"btnDure btn btn-default \">Duration: 3 weeks </button>\r\n          </div>\r\n          <div class=\"col-md-8 col-sm-0 col-0\"></div>\r\n          <div class=\"col-md-4 col-sm-6 col-12\">\r\n            <button class=\"btn_style btn btn-default\" [disabled]=\"p_disabled\" [ngStyle]=\"{'display':hidden}\" (click)='hide()'>Follow</button>\r\n            <button class=\"btn_style btn btn-default\" [ngStyle]=\"{'display':display}\">Continue</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<br>\r\n<div class=\"container\">\r\n  <ngb-accordion [closeOthers]=\"true\">\r\n    <br>\r\n    <br>\r\n    <ngb-panel id=\"{{'static-'+i}}\"  *ngFor=\"let business of business.businesses; let i= index\">\r\n      <ng-template ngbPanelTitle>\r\n        <span>\r\n          <div  [ngStyle]=\"{'background-color':testcolor}\"  class=\"orden\">{{(testTrue)?'✓':i+1}} </div> {{ business.name}}</span>\r\n        </ng-template>\r\n        <ng-template ngbPanelContent>\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <p class=\"panel-name\">{{business.name}}</p>\r\n              <pm-star [rating]='business.rating'></pm-star>\r\n              <span class=\"rev-count\">{{business.review_count}} reviews</span>\r\n              <p class=\"panel-price\">{{business.price}}</p>\r\n              <p class=\"panel-address\">{{business.location.display_address[0]}}, {{business.location.display_address[1]}}, {{business.location.display_address[2]}}</p>\r\n            </div>\r\n            <div class=\"col\">\r\n              <div class=\"thumbnail business-info\">\r\n                <p class=\"panel-open\"> {{business.is_closed | isOpen: business.is_closed}}</p>\r\n                <hr>\r\n                <p class=\"panel-contact\">\r\n                  <a href=\"tel:{{business.display_phone}}\">{{business.display_phone}}</a>\r\n                  <br>\r\n                  <a href=\"{{business.url}}\" target=\"_blank\">{{business.name}} Yelp Link</a>\r\n                </p>\r\n              </div>\r\n            </div>\r\n            <div class=\"col\">\r\n              <div class=\"thumb-post\">\r\n                <img src=\"{{business.image_url}}\" alt=\"{{business.name}}\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"col\">\r\n              <pm-map [latitude]='business.coordinates.latitude' [longitude]='business.coordinates.longitude' [label]='business.name'></pm-map>\r\n            </div>\r\n            <div class=\"col-1\">\r\n              <a [routerLink]=\"['/details', business.id, category, i]\">\r\n                <i class=\"fa fa-angle-right angle\"></i>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n        </ngb-panel>\r\n        <br>\r\n  </ngb-accordion>\r\n</div>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n"

/***/ }),

/***/ "../../../../../src/app/businesses/businesses.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_yelp_service__ = __webpack_require__("../../../../../src/app/service/yelp-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BusinessesComponent = /** @class */ (function () {
    function BusinessesComponent(_businessService, _route, _router, config) {
        this._businessService = _businessService;
        this._route = _route;
        this._router = _router;
        this.display = 'none';
        this.hidden = 'block';
        this.p_disabled = false;
        this.testTrue = false;
        this.business = [];
        this.geolocationPosition = {};
        this.postNumber = 0;
        this.defaultImage = '../../assets/no-image.jpg';
        this.progress = 0;
        this.isComplete1italian = false;
        this.category = this._route.snapshot.paramMap.get('ctg');
        this.TitleJournal = this.category;
        this.bimage = 'url("../../assets/' + this.TitleJournal + '.png")';
        config.justify = 'start';
        config.type = 'tabs';
    }
    BusinessesComponent.prototype.getTotalProgress = function () {
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
    };
    BusinessesComponent.prototype.storeLocation = function (location) {
        localStorage.setItem('latitude', JSON.stringify(location['latitude']));
        localStorage.setItem('longitude', JSON.stringify(location['longitude']));
    };
    BusinessesComponent.prototype.setComplete = function () {
        for (var index = 0; index <= 5; index++) {
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
    };
    BusinessesComponent.prototype.ngOnChanges = function () { };
    BusinessesComponent.prototype.ngOnInit = function () {
        var _this = this;
        //get Geolocation
        if (window.navigator && window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(function (position) {
                (_this.geolocationPosition = position.coords),
                    _this.storeLocation(_this.geolocationPosition),
                    _this._businessService
                        .getBusinessByLocation(_this.category)
                        .subscribe(function (business) {
                        _this.business = business;
                    }, function (error) { return (_this.errorMessage = error); });
            }, function (error) { return (_this.errorMessage = error); });
        }
        this.getTotalProgress();
        this.f_title(this.category);
        this.testCond();
        localStorage.setItem('testTrue', 'false');
    };
    BusinessesComponent.prototype.myFunction = function () {
        var x = document.getElementById('myTopnav');
        if (x.className === 'topnav') {
            x.className += ' responsive';
        }
        else {
            x.className = 'topnav';
        }
    };
    BusinessesComponent.prototype.testCond = function () {
        if (localStorage.getItem('testTrue') == 'false') {
            this.testcolor = 'gray';
        }
        else {
            this.testcolor = '#2cb2ff';
        }
    };
    BusinessesComponent.prototype.hide = function () {
        this.display = 'block';
        this.hidden = 'none';
        console.log(this.category);
    };
    BusinessesComponent.prototype.f_title = function (title) {
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
    };
    BusinessesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-businesses',
            template: __webpack_require__("../../../../../src/app/businesses/businesses.component.html"),
            styles: [__webpack_require__("../../../../../src/app/businesses/businesses.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbTabsetConfig */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_yelp_service__["a" /* YelpServiceComponent */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbTabsetConfig */]])
    ], BusinessesComponent);
    return BusinessesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/challenges/challenges.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom-navbar {\r\n  background-color: #fe5240 !important;\r\n}\r\n\r\n.challenge-caption-text {\r\n  font-size: 12px;\r\n}\r\n\r\n.duration {\r\n  font-size: 13px;\r\n}\r\n\r\n.welcome-challenge {\r\n  font-size: 24px;\r\n  margin-top: 50px;\r\n  margin-bottom: 50px;\r\n  font-weight: normal;\r\n}\r\n\r\n.challenge-progress {\r\n  fill:#fd513f;\r\n  fill-opacity: 0.8;\r\n}\r\n\r\n.img-overlay-wrap {\r\n  position: relative;\r\n  display: inline-block;\r\n  /* <= shrinks container to image size */\r\n  -webkit-transition: -webkit-transform 150ms ease-in-out;\r\n  transition: -webkit-transform 150ms ease-in-out;\r\n  transition: transform 150ms ease-in-out;\r\n  transition: transform 150ms ease-in-out, -webkit-transform 150ms ease-in-out;\r\n}\r\n\r\n.img-overlay-wrap img {\r\n  /* <= optional, for responsiveness */\r\n  display: block;\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.img-overlay-wrap svg {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.challenge-progress-text {\r\n  fill: #ebf4f4;\r\n  font-size: 12px;\r\n}\r\n\r\nbody {\r\n  padding-top: 54px;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  body {\r\n    padding-top: 56px;\r\n  }\r\n}\r\n\r\n#perc {\r\n  color: white;\r\n  border: 3px solid green;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .col-lg-3 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 25%;\r\n    flex: 0 0 25%;\r\n    max-width: 20%;\r\n  }\r\n}\r\n\r\n.portfolio-item {\r\n  margin-bottom: 30px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/challenges/challenges.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1 class=\"text-center text-lg-center welcome-challenge\">Welcome! Choose a path to get started. </h1>\r\n  <div class=\"row text-center text-lg-left\">\r\n    <div class=\"col-lg-3 col-sm-6 portfolio-item\">\r\n      <div class=\"card h-100\">\r\n        <a [routerLink]=\"['/businesses', 'burgers']\" class=\"img-overlay-wrap\">\r\n          <img class=\"card-img-top\" src=\"../../assets/americanrect.png\" alt=\"\">\r\n          <svg viewBox=\"0 0 200 200\">\r\n            <rect [attr.width]=\"challengeWidthAmerican\" height=\"110\" class=\"challenge-progress\" />\r\n            <text id=\"perc\" x=\"85\" y=\"90\" class=\"challenge-progress-text\">{{challengeProgressAmerican}}%</text>\r\n          </svg>\r\n        </a>\r\n        <div class=\"card-body\">\r\n          <p class=\"card-text challenge-caption-text\">One characteristic of American cooking is the fusion of multiple ethnic or regional approaches into completely\r\n            new cooking styles.</p>\r\n          <p class=\"duration\">\r\n            <strong>Duration: 3 weeks</strong>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-3 col-sm-6 portfolio-item\">\r\n      <div class=\"card h-100\">\r\n        <a [routerLink]=\"['/businesses', 'italian']\" class=\"img-overlay-wrap\">\r\n          <img class=\"card-img-top\" src=\"../../assets/italianrect.png\" alt=\"\">\r\n          <svg viewBox=\"0 0 200 200\">\r\n            <rect [attr.width]=\"challengeWidthItalian\" height=\"110\" class=\"challenge-progress\" />\r\n            <text id=\"perc\" x=\"85\" y=\"90\" class=\"challenge-progress-text\">{{challengeProgressItalian}}%</text>\r\n          </svg>\r\n        </a>\r\n        <div class=\"card-body\">\r\n          <p class=\"card-text challenge-caption-text\">An Italian meal is famous for its structure into several sections: the appetiser, pasta or rice dish, a meat course\r\n            and dolce dessert.</p>\r\n          <p class=\"duration\">\r\n            <strong>Duration: 1 week</strong>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-3 col-sm-6 portfolio-item\">\r\n      <div class=\"card h-100\">\r\n        <a [routerLink]=\"['/businesses', 'mexican']\" class=\"img-overlay-wrap\">\r\n          <img class=\"card-img-top\" src=\"../../assets/mexicanrect.png\" alt=\"\">\r\n          <svg viewBox=\"0 0 200 200\">\r\n            <rect [attr.width]=\"challengeWidthMexican\" height=\"110\" class=\"challenge-progress\" />\r\n            <text id=\"perc\" x=\"85\" y=\"90\" class=\"challenge-progress-text\">{{challengeProgressMexican}}%</text>\r\n          </svg>\r\n        </a>\r\n        <div class=\"card-body\">\r\n          <p class=\"card-text challenge-caption-text\">Known for its varied flavours and spices, the food of Mexico is a result of the Spanish conquistadores' interaction\r\n            with the Aztec culture.</p>\r\n          <p class=\"duration\">\r\n            <strong>Duration: 2 weeks</strong>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-3 col-sm-6 portfolio-item\">\r\n      <div class=\"card h-100\">\r\n        <a [routerLink]=\"['/businesses', 'japanese']\" class=\"img-overlay-wrap\">\r\n          <img class=\"card-img-top\" src=\"../../assets/japaneserect.png\" alt=\"\">\r\n          <svg viewBox=\"0 0 200 200\">\r\n            <rect [attr.width]=\"challengeWidthJapanese\" height=\"110\" class=\"challenge-progress\" />\r\n            <text id=\"perc\" x=\"85\" y=\"90\" class=\"challenge-progress-text\">{{challengeProgressJapanese}}%</text>\r\n          </svg>\r\n        </a>\r\n        <div class=\"card-body\">\r\n          <p class=\"card-text challenge-caption-text\">In 2014, 14 restaurants in Tokio and Shonan maintain a Michelin three-stars raiting, the ultimate international\r\n            recognition in the culinary world.</p>\r\n          <p class=\"duration\">\r\n            <strong>Duration: 3 weeks</strong>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-3 col-sm-6 portfolio-item\">\r\n      <div class=\"card h-100\">\r\n        <a [routerLink]=\"['/businesses', 'korean']\" class=\"img-overlay-wrap\">\r\n          <img class=\"card-img-top\" src=\"../../assets/koreanrect.png\" alt=\"\">\r\n          <svg viewBox=\"0 0 200 200\">\r\n            <rect [attr.width]=\"challengeWidthKorean\" height=\"110\" class=\"challenge-progress\" />\r\n            <text id=\"perc\" x=\"85\" y=\"90\" class=\"challenge-progress-text\">{{challengeProgressKorean}}%</text>\r\n          </svg>\r\n        </a>\r\n        <div class=\"card-body\">\r\n          <p class=\"card-text challenge-caption-text\">Originating from ancient agricultural and nomadic traditions, Korean cuisine has evolved through a complex interaction\r\n            of the natural environment and different cultural trends.</p>\r\n          <p class=\"duration\">\r\n            <strong>Duration: 3 weeks</strong>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/challenges/challenges.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChallengesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChallengesComponent = /** @class */ (function () {
    function ChallengesComponent() {
        this.challengeProgressItalian = 0;
        this.challengeWidthItalian = 0;
        this.challengeProgressMexican = 0;
        this.challengeWidthMexican = 0;
        this.challengeProgressJapanese = 0;
        this.challengeWidthJapanese = 0;
        this.challengeProgressKorean = 0;
        this.challengeWidthKorean = 0;
        this.challengeProgressAmerican = 0;
        this.challengeWidthAmerican = 0;
    }
    ChallengesComponent.prototype.checkProgress = function () {
        var counterI = 0;
        var counterM = 0;
        var counterJ = 0;
        var counterK = 0;
        var counterA = 0;
        for (var index = 0; index <= 5; index++) {
            if (localStorage.getItem('challenge' + index + '-italian') === 'true') {
                this.challengeProgressItalian = this.challengeProgressItalian + 20;
                counterI++;
            }
            if (localStorage.getItem('challenge' + index + '-mexican') === 'true') {
                this.challengeProgressMexican = this.challengeProgressMexican + 20;
                counterM++;
            }
            if (localStorage.getItem('challenge' + index + '-japanese') === 'true') {
                this.challengeProgressJapanese = this.challengeProgressJapanese + 20;
                counterJ++;
            }
            if (localStorage.getItem('challenge' + index + '-korean') === 'true') {
                this.challengeProgressKorean = this.challengeProgressKorean + 20;
                counterK++;
            }
            if (localStorage.getItem('challenge' + index + '-burgers') === 'true') {
                this.challengeProgressAmerican = this.challengeProgressAmerican + 20;
                counterA++;
            }
        }
        localStorage.setItem('totalProgressItalian', JSON.stringify(this.challengeProgressItalian));
        localStorage.setItem('totalProgressMexican', JSON.stringify(this.challengeProgressMexican));
        localStorage.setItem('totalProgressKorean', JSON.stringify(this.challengeProgressKorean));
        localStorage.setItem('totalProgressJapanese', JSON.stringify(this.challengeProgressJapanese));
        localStorage.setItem('totalProgressAmerican', JSON.stringify(this.challengeProgressAmerican));
        this.challengeWidthItalian = counterI * 20 * 196 / 100;
        this.challengeWidthMexican = counterM * 20 * 196 / 100;
        this.challengeWidthJapanese = counterJ * 20 * 196 / 100;
        this.challengeWidthKorean = counterK * 20 * 196 / 100;
        this.challengeWidthAmerican = counterA * 20 * 196 / 100;
    };
    ChallengesComponent.prototype.ngOnInit = function () {
        this.checkProgress();
    };
    ChallengesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-challenges',
            template: __webpack_require__("../../../../../src/app/challenges/challenges.component.html"),
            styles: [__webpack_require__("../../../../../src/app/challenges/challenges.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChallengesComponent);
    return ChallengesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/details/details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n  background-color: #f7f7f7;\r\n}\r\n\r\n#slider {\r\n  overflow: hidden;\r\n}\r\n\r\n@-webkit-keyframes slider {\r\n  0% {\r\n    left: 0;\r\n  }\r\n  30% {\r\n    left: 0;\r\n  }\r\n  33% {\r\n    left: -100%;\r\n  }\r\n  63% {\r\n    left: -100%;\r\n  }\r\n  66% {\r\n    left: -200%;\r\n  }\r\n  95% {\r\n    left: -200%;\r\n  }\r\n  100% {\r\n    left: 0;\r\n  }\r\n}\r\n\r\n@keyframes slider {\r\n  0% {\r\n    left: 0;\r\n  }\r\n  30% {\r\n    left: 0;\r\n  }\r\n  33% {\r\n    left: -100%;\r\n  }\r\n  63% {\r\n    left: -100%;\r\n  }\r\n  66% {\r\n    left: -200%;\r\n  }\r\n  95% {\r\n    left: -200%;\r\n  }\r\n  100% {\r\n    left: 0;\r\n  }\r\n}\r\n\r\n#slider figure {\r\n  width: 300%;\r\n  position: relative;\r\n  -webkit-animation: 9s slider infinite;\r\n          animation: 9s slider infinite;\r\n}\r\n\r\n#slider figure img {\r\n  width: 33.333333333%;\r\n  height: 350px;\r\n  float: left;\r\n}\r\n\r\n.fig-wrapper {\r\n  position: relative;\r\n}\r\n\r\n/* Bottom right text */\r\n\r\n.text-block {\r\n  position: absolute;\r\n  color: white;\r\n  padding-left: 20px;\r\n  padding-right: 20px;\r\n  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\r\n}\r\n\r\n.business-info {\r\n  background-color: #f8f9fa;\r\n  height: 140px;\r\n  border: none;\r\n  border-radius: 0px;\r\n  padding-left: 20px;\r\n  padding-top: 15px;\r\n}\r\n\r\n.panel-open {\r\n  color: green;\r\n  font-family: 'simonson';\r\n}\r\n\r\n.panel-contact i a {\r\n  font-family: 'simonson';\r\n  font-size: 14px;\r\n}\r\n\r\n.box-container {\r\n  margin: 30px 0 30px;\r\n}\r\n\r\n.box-wrapper {\r\n  background-color: white;\r\n  padding: 15px;\r\n  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.navigation-btn {\r\n  margin-top: 30px;\r\n  margin-bottom: 30px;\r\n  font-family: 'simonson';\r\n  font-weight: bolder;\r\n}\r\n\r\n.marked {\r\n  width: 70%;\r\n}\r\n\r\n.bizzName {\r\n  display: inline;\r\n}\r\n\r\n.nav-link {\r\n  font-family: 'simonson';\r\n  color: #fe5240;\r\n  font-weight: bolder;\r\n}\r\n\r\n.nav-link span {\r\n  color: #9aa5b1;\r\n  font-weight: normal;\r\n}\r\n\r\n.row button {\r\n  display: inline;\r\n}\r\n\r\n.row i {\r\n  color: #fe5240;\r\n}\r\n\r\n.feedback {\r\n  float: right;\r\n  padding: 10px;\r\n  border-radius: 0%;\r\n  font-size: 1em;\r\n  width: 50%;\r\n  height: 55px;\r\n  border: 3px solid #d1d9e0;\r\n  background-color: white;\r\n}\r\n\r\n.nav-dts {\r\n  margin: 30px 0px;\r\n}\r\n\r\n.fa-alph {\r\n  font-family: 'simonson';\r\n  /* your font family here! */\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  color: #fe5240;\r\n  font-style: bolder;\r\n}\r\n\r\nspan.step {\r\n  background: #5a5959;\r\n  border-radius: 0.8em;\r\n  -moz-border-radius: 0.8em;\r\n  -webkit-border-radius: 0.8em;\r\n  color: #ffffff;\r\n  display: inline-block;\r\n  font-weight: normal;\r\n  line-height: 1.6em;\r\n  margin-right: 5px;\r\n  text-align: center;\r\n  width: 1.6em;\r\n  font-size: 1.5em;\r\n}\r\n\r\n.recipe-name {\r\n  font-weight: bolder;\r\n  font-family: 'simonson';\r\n  font-size: 16px;\r\n}\r\n\r\n.recipe-desc {\r\n  font-weight: normal;\r\n  font-family: 'simonson';\r\n  font-size: 14px;\r\n}\r\n\r\n.prev-button {\r\n  background-color: #555555;\r\n  color: #f2f2f2;\r\n  border-radius: 0%;\r\n  font-size: 1em;\r\n  width: 100%;\r\n  height: 55px;\r\n}\r\n\r\n.started-button {\r\n  background-color: #fe5240;\r\n  color: #f2f2f2;\r\n  border-radius: 0%;\r\n  font-size: 1em;\r\n  width: 100%;\r\n  height: 55px;\r\n}\r\n\r\n.next-button {\r\n  background-color: #f2f2f2;\r\n  color: #9aa5b1;\r\n  border-radius: 0%;\r\n  font-size: 1em;\r\n  width: 100%;\r\n  height: 55px;\r\n}\r\n\r\n.continue-button {\r\n  background-color: #2cb2ff;\r\n  color: #f2f2f2;\r\n  border-radius: 0%;\r\n  font-size: 1em;\r\n  width: 100%;\r\n  height: 55px;\r\n}\r\n\r\n.go-button {\r\n  color: #4a4a4a;\r\n  border-radius: 0%;\r\n  font-size: 1em;\r\n  width: 100%;\r\n  height: 55px;\r\n}\r\n\r\n.letter1 {\r\n  font-size: small;\r\n  color: #d1d9e0;\r\n}\r\n\r\n.letter2 {\r\n  font-size: small;\r\n  color: #d1d9e0;\r\n}\r\n\r\n/* Styles added by Edgar for mobile */\r\n\r\n@media only screen and (max-width: 550px) {\r\n  .feedback {\r\n    display: none !important;\r\n  }\r\n  .prev-button,\r\n  .next-button {\r\n    display: none !important;\r\n  }\r\n\r\n  .started-button {\r\n    background-color: #fe5240;\r\n    color: #f7f7f7;\r\n    border-radius: 0%;\r\n    font-size: 1em;\r\n    width: 100%;\r\n    height: 55px;\r\n  }\r\n\r\n  .started-container {\r\n    padding: 0;\r\n  }\r\n  .navigation-btn {\r\n    margin: 0;\r\n    margin-top: 30px;\r\n  }\r\n\r\n  #slider {\r\n    height: 140px;\r\n  }\r\n\r\n  .box-wrapper {\r\n    background-color: #fff;\r\n  }\r\n\r\n  .business-title > h2 {\r\n    font-size: 1.6rem;\r\n  }\r\n\r\n  h4 {\r\n    font-size: 1.2rem;\r\n  }\r\n}\r\n\r\nNo Title\r\n/*MODAL*/\r\n#bluecheck {\r\n  width: 16px;\r\n  height: 16px;\r\n}\r\n\r\n.modal {\r\n  position: center;\r\n  top: 16%;\r\n  width: 100%;\r\n  height: auto;\r\n  margin: auto;\r\n  text-align: center;\r\n}\r\n\r\n.modal-header {\r\n  padding-top: 3%;\r\n  margin-top: 3%;\r\n  width: 100%;\r\n  font-size: 120%;\r\n  color: #4a4a4a;\r\n  text-align: center;\r\n}\r\n\r\n.feedback_text {\r\n  height: 100%;\r\n  width: 100%;\r\n  margin-bottom: 3%;\r\n}\r\n\r\n.modal_body {\r\n  width: auto;\r\n  height: 100%;\r\n  padding: 5%;\r\n  font-size: 15px;\r\n  margin: auto;\r\n}\r\n\r\n.inl {\r\n  display: inline-block;\r\n  color: #fd513f;\r\n}\r\n\r\n.modal-content {\r\n  height: auto;\r\n  border-radius: 0%;\r\n  font-size: 15px;\r\n  margin: auto;\r\n}\r\n\r\n.modal-header {\r\n  padding: 3%;\r\n  border: none;\r\n}\r\n\r\n#blanco {\r\n  color: white;\r\n}\r\n\r\n.rating {\r\n  unicode-bidi: bidi-override;\r\n  direction: rtl;\r\n}\r\n\r\n.rating > span {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 1em;\r\n  color: #f0bf21;\r\n  font-size: 2em;\r\n}\r\n\r\n.rating > span:hover:before,\r\n.rating > span:hover ~ span:before {\r\n  content: '\\2605';\r\n  position: absolute;\r\n}\r\n\r\n#btn_feedback {\r\n  width: 50%;\r\n  height: 55px;\r\n  text-align: center;\r\n  padding: 1%;\r\n  background-color: #fd513f;\r\n  border-radius: 0;\r\n  border-style: none;\r\n  color: white;\r\n  font-size: 16px;\r\n  margin: auto;\r\n  margin-top: 1%;\r\n  margin-bottom: 2%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/details/details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row nav-dts\">\r\n    <div class=\"col-md-6 col-md-offset-1\" routerLink='/challenges'>\r\n      <i class=\"fa fa-arrow-left btn-link\"></i>\r\n      <button type=\"button\" class=\"btn btn-link nav-link\">Journeys\r\n        <span> / {{businessObject.name}}</span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ng4-loading-spinner [template]=\"template\"> </ng4-loading-spinner>\r\n<div *ngIf=\"pageReady\">\r\n\r\n  <div class=\"container box-wrapper\">\r\n    <div class=\"row box-container\">\r\n      <div class=\"col-md-6 business-title\">\r\n        <span class=\"step\">1</span>\r\n        <h3 class=\"bizzName\">{{businessObject.name}}\r\n          <span *ngIf=\"btn_started1\" class=\"letter1\"> STARTED</span>\r\n          <span *ngIf=\"btn_started2\" class=\"letter2\"> COMPLETED-</span>\r\n        </h3>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <button class=\"btn btn-light btn-lg feedback\"  (click)=\"open()\"  *ngIf =\"btn_started3\">Leave Feedback</button>\r\n\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"row box-container\">\r\n      <div class=\"col\">\r\n        <div class=\"row\">\r\n          <div class=\"col-6\">\r\n            <div id=\"slider\">\r\n              <figure>\r\n                <span *ngFor=\"let photo of businessObject.photos\">\r\n                  <img src=\"{{photo}}\">\r\n                </span>\r\n              </figure>\r\n              <div class=\"text-block\">\r\n                <h4>\r\n                  {{businessObject.name}}\r\n                </h4>\r\n                <pm-star [rating]='businessObject.rating'></pm-star>&nbsp;\r\n                <span class=\"rev-count\">{{businessObject.review_count}} reviews</span>\r\n                <p>{{businessObject.price}}</p>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <pm-map [latitude]='businessObject.coordinates.latitude' [longitude]='businessObject.coordinates.longitude' [label]='businessObject.name'></pm-map>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row box-container\">\r\n      <div class=\"col\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-9\">\r\n            <p class=\"recipe-name\">{{selectedRecipe.name}}</p>\r\n            <p class=\"recipe-desc\">{{selectedRecipe.description}}</p>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <div class=\"thumbnail business-info\">\r\n              <p class=\"panel-open\"> {{businessObject.is_closed | isOpen: businessObject.is_closed}}</p>\r\n              <hr>\r\n              <p class=\"panel-contact\">\r\n                <i class=\"fa fa-phone\">\r\n                  <a href=\"tel:{{businessObject.display_phone}}\">{{businessObject.display_phone}}</a>\r\n                </i>\r\n                <br>\r\n                <i class=\"fa fa-external-link\">\r\n                  <a href=\"{{businessObject.url}}\" target=\"_blank\">{{businessObject.name}} Yelp Link</a>\r\n                </i>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"container navigation-btn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 text-center\">\r\n      <button id=\"singlebutton2\" [disabled]=\"p_disabled1\" class=\"btn btn-lg prev-button\">Previous</button>\r\n    </div>\r\n    <div class=\"col-md-6 text-center\">\r\n      <button id=\"singlebutton\" (click)='hideMark(1)' *ngIf=\"btn_go1\" class=\"btn btn-lg marked started-button\">Mark as Started</button>\r\n      <button class=\"btn_style btn btn-default continue-button\" (click)=\"hideMark(2)\" *ngIf=\"btn_go2\">Mark as Completed</button>\r\n      <button class=\"btn_style btn btn-default go-button\"  (click)=\"hideMark(3)\"  *ngIf =\"btn_go3\">\r\n        <img id=\"bluecheck\"  src=\"../../assets/check.png\"> Way to go! Take the next challenge</button>\r\n    </div>\r\n    <div class=\"col-md-3 text-center\">\r\n      <button id=\"singlebutton1\" [disabled]=\"p_disabled\" [ngStyle]=\"{'background-color':cambiarColor, 'color':cambiarColor2}\" class=\"btn btn-light btn-lg next-button\">Next</button>\r\n    </div>\r\n    <!--MODAL FEEDBACK LORENA-->\r\n    <div class=\"backdrop\"  [ngStyle]=\"{'display':display}\"></div>\r\n  <div class=\"modal\"  tabindex=\"-1\"  role=\"dialog\"  id=\"modal\"  [ngStyle]=\"{'display':display}\">\r\n    <div class=\"modal-dialog modal-md\"  role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">Tell us what you thought of\r\n          <i id=\"blanco\">_</i>\r\n            <i class=\"inl\">{{businessObject.name}}</i>\r\n              <button type=\"button\"  class=\"close\"  aria-label=\"Close\"  (click)=\"onCloseHandled()\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n                  </button>\r\n</div>\r\n<div class=\"modal-body text-center\">\r\n  <textarea class=\"feedback_text\"  name=\"feedback\"  rows=\"5\"  placeholder=\"Write your feedback\"></textarea>\r\n    <!-- <input class=\"feedback_text\" placeholder=\"Write your feedback\" type=\"text\"><br> -->\r\n    <br> Rate this restaurant\r\n    <div class=\"rating\">\r\n      <span>☆</span>\r\n      <span>☆</span>\r\n      <span>☆</span>\r\n      <span>☆</span>\r\n      <span>☆</span>\r\n      </div>\r\n      <button id=\"btn_feedback\"  (click)=\"onCloseHandled()\">Send Feedback</button>\r\n        </div>\r\n        </div>\r\n        <!-- /.modal-content -->\r\n        </div>\r\n        <!-- /.modal-dialog -->\r\n        </div>\r\n        <!-- /.modal !-->\r\n"

/***/ }),

/***/ "../../../../../src/app/details/details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_yelp_service__ = __webpack_require__("../../../../../src/app/service/yelp-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(_businessService, _route, _router, spinnerService) {
        this._businessService = _businessService;
        this._route = _route;
        this._router = _router;
        this.spinnerService = spinnerService;
        this.display = 'none';
        this.hidden = 'block';
        this.btn_go1 = true;
        this.btn_go2 = false;
        this.btn_go3 = false;
        this.p_disabled = true;
        this.p_disabled1 = true;
        this.btn_started1 = false;
        this.btn_started2 = false;
        this.btn_started3 = false;
        this.businessObject = {};
        this.id = this._route.snapshot.paramMap.get('id');
        this.category = this._route.snapshot.paramMap.get('type');
        this.postNumber = 1 + +this._route.snapshot.paramMap.get('number');
        this.allRecipes = [];
        this.selectedRecipe = {};
        this.pageReady = false;
        this.defaultImage = '../../assets/no-image.jpg';
        this.template = "<img src=\"http://pa1.narvii.com/5722/2c617cd9674417d272084884b61e4bb7dd5f0b15_hq.gif\" />";
    }
    //modal
    DetailsComponent.prototype.open = function () {
        this.display = 'block';
    };
    DetailsComponent.prototype.onCloseHandled = function () {
        this.display = 'none';
    };
    //modal
    DetailsComponent.prototype.selectRandomRecipe = function () {
        var index = Math.floor(Math.random() * this.allRecipes.length + 1);
        this.selectedRecipe = this.allRecipes[index];
        console.log(this.selectedRecipe);
    };
    DetailsComponent.prototype.setTimer = function () {
        var _this = this;
        this.currentTimeout = window.setTimeout(function () {
            _this.spinnerService.hide();
            _this.pageReady = true;
        }, 4000);
    };
    DetailsComponent.prototype.setChallengeComplete = function (challenge) {
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
    };
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinnerService.show();
        this._businessService.getBusinessById(this.id).subscribe(function (business) {
            _this.businessObject = business;
            console.log(_this.businessObject);
        }, function (error) { return (_this.errorMessage = error); });
        this._businessService.getJsonRecipe(this.category).subscribe(function (recipes) {
            _this.allRecipes = recipes;
            _this.selectRandomRecipe();
            _this.setTimer();
        }, function (error) { return (_this.errorMessage = error); });
    };
    DetailsComponent.prototype.hideMark = function (id) {
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
    };
    DetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-details',
            template: __webpack_require__("../../../../../src/app/details/details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/details/details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_yelp_service__["a" /* YelpServiceComponent */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.jumbotron {\r\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/bg-img1.jpg")) + ");\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  margin-bottom: 0;\r\n  margin-top: -5%;\r\n}\r\n\r\n.main-style {\r\n  background: #fe2540;\r\n  color: white;\r\n}\r\n\r\n.main-section {\r\n  text-align: center;\r\n  padding-bottom: 20px;\r\n  height: 515px;\r\n  padding-top: 5%;\r\n}\r\n\r\n.main-section h1 {\r\n  padding: 60px 0 40px 0;\r\n  font-size: 36px;\r\n  color: #424242;\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: 700;\r\n}\r\n\r\n.main-section h2 {\r\n  font-size: 24px;\r\n  color: #424242;\r\n  font-family: 'Open Sans', sans-serif;\r\n  padding-bottom: 60px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.services {\r\n  padding-top: 150px;\r\n  text-align: center;\r\n  height: 600px;\r\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/bg-img2.jpg")) + ");\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.services h3 {\r\n  color: #4c4c4c;\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n.services i {\r\n  height: 150px;\r\n  width: 150px;\r\n  font-size: 34px;\r\n  text-align: center;\r\n  padding: 50px;\r\n  border-radius: 50%;\r\n  background-color: #fe5240;\r\n  color: white;\r\n  margin-bottom: 10%;\r\n}\r\n\r\n.main-button {\r\n  width: 190px;\r\n  height: 53px;\r\n  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.4);\r\n          box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.4);\r\n  background-color: #fd513f;\r\n  border-radius: 0;\r\n  border-style: none;\r\n  font-size: 18px;\r\n}\r\n\r\n.main-button:hover {\r\n  background-color: #f1220d;\r\n  color: #f6f6f6;\r\n}\r\n\r\n.main-button:active {\r\n  background-color: #ff988d !important;\r\n  color: #f6f6f6 !important;\r\n}\r\n\r\n.discover-bar {\r\n  border: 2px black solid;\r\n  text-align: center;\r\n  color: white;\r\n  background-color: #000000;\r\n  opacity: 0.5;\r\n  width: 100%;\r\n  bottom: 0px;\r\n  position: absolute;\r\n  height: 50px;\r\n}\r\n\r\n.discover-bar h3 {\r\n  font-size: 18px;\r\n  padding-top: 8px;\r\n  padding-bottom: 15px;\r\n  margin: auto;\r\n}\r\n\r\n#footer {\r\n  color: #424242;\r\n  text-align: center;\r\n  font-family: 'Open Sans', sans-serif;\r\n  margin-top: 15px;\r\n}\r\n\r\n/* Media queries for tablet */\r\n\r\n@media only screen and (max-width: 900px) {\r\n  .services {\r\n    padding-top: 35px;\r\n  }\r\n  .services h3 {\r\n    font-size: 1.1em;\r\n    margin-bottom: 35px;\r\n    padding: 0 15px;\r\n  }\r\n  .services i {\r\n    margin-top: 100px;\r\n  }\r\n  .discover-bar {\r\n    visibility: hidden;\r\n  }\r\n}\r\n\r\n/* Media queries for mobile views */\r\n\r\n@media only screen and (max-width: 550px) {\r\n  /* .main-section h1 {\r\n    font-size: 2em;\r\n  } */\r\n  .main-section h2 {\r\n    /* font-size: 1.2em; */\r\n    padding-bottom: 20px;\r\n  }\r\n  .services {\r\n    padding-top: 5px;\r\n  }\r\n  .services h3 {\r\n    /* font-size: 0.7em; */\r\n    margin-bottom: 5px;\r\n    padding: 0 15px;\r\n    margin-top: 15px;\r\n  }\r\n  \r\n  .services i {\r\n    height: 85px;\r\n    width: 85px;\r\n    /* font-size: 30px; */\r\n    padding: 28px 0;\r\n    border-radius: 50%;\r\n    background-color: #fe5240;\r\n    color: white;\r\n    margin-top: 40px;\r\n  }\r\n  #footer {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .services {\r\n    height: auto;\r\n  }\r\n}\r\n\r\n#logo{\r\n    width: 30%;\r\n    height: auto;\r\n    margin: auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"jumbotron jumbotron-fluid\">\r\n  <div class=\"container-fluid main-section\">\r\n    <h1>Challenge Yourself</h1>\r\n    <h2>Foodie Journal makes it easy for you to embark\r\n      <br>on a journey to discover new cuisines</h2>\r\n    <button type=\"button\" class=\"btn btn-default main-style main-button\" [routerLink]=\"['/challenges']\" (click)=\"start()\">Get Started</button>\r\n\r\n  </div>\r\n\r\n  <div class=\"discover-bar\">\r\n  <h3 id=\"scrollme1\">Discover More <i class=\"fa fa-angle-down\" style=\"font-size:24px\"></i></h3>\r\n  </div>\r\n</div>\r\n\r\n<!-- Services -->\r\n<section class=\"services\" id=\"services\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <i class=\"fa fa-cutlery\" aria-hidden=\"true\"></i>\r\n        <h3>Explore the top 5 international cuisines and follow cuisine journeys</h3>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <i class=\"fa fa-map-signs\" aria-hidden=\"true\"></i>\r\n        <h3>Receive restaurant recommendations based on your preferences and location</h3>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\r\n        <h3>Complete challenges and track your progress against your selected cuisine journey</h3>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- end Services -->\r\n<!-- footer -->\r\n<section id=\"footer\">\r\n\r\n    <div class=\"container\">\r\n      <p>Developed by<a href=\"../team\"><img id=\"logo\" src=\"../../assets/fotosequipo/sinister6no.png\" alt=\"logo\" title=\"Sinister Six\"></a></p>\r\n    </div>\r\n  </section>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__("../../../../../src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/maps/maps.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\r\n  /* height: 140px;\r\n  width: 200px; */\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/maps/maps.component.html":
/***/ (function(module, exports) {

module.exports = "<agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [disableDefaultUI]=\"false\" [zoomControl]=\"false\" style=\"float:left\">\r\n\r\n  <agm-marker *ngFor=\"let m of markers; let i = index\" (markerClick)=\"clickedMarker(m.label, i)\" [latitude]=\"m.lat\" [longitude]=\"m.lng\"\r\n    [label]=\"m.label\">\r\n\r\n    <agm-info-window>\r\n      <strong>{{label}}</strong>\r\n    </agm-info-window>\r\n\r\n  </agm-marker>\r\n</agm-map>\r\n"

/***/ }),

/***/ "../../../../../src/app/maps/maps.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapsComponent = /** @class */ (function () {
    function MapsComponent() {
    }
    MapsComponent.prototype.ngOnChanges = function () {
        this.zoom = 16;
        this.lat = this.latitude;
        this.lng = this.longitude;
        this.markers = [{
                lat: this.latitude,
                lng: this.longitude,
            }
        ];
    };
    MapsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], MapsComponent.prototype, "latitude", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], MapsComponent.prototype, "longitude", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MapsComponent.prototype, "label", void 0);
    MapsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pm-map',
            template: __webpack_require__("../../../../../src/app/maps/maps.component.html"),
            styles: [__webpack_require__("../../../../../src/app/maps/maps.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MapsComponent);
    return MapsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/pipes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsOpenPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IsOpenPipe = /** @class */ (function () {
    function IsOpenPipe() {
    }
    IsOpenPipe.prototype.transform = function (status) {
        return ((status != true) ? 'Open Now' : 'Closed');
    };
    IsOpenPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'isOpen'
        })
    ], IsOpenPipe);
    return IsOpenPipe;
}());



/***/ }),

/***/ "../../../../../src/app/rating/rating.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".crop {\r\n  overflow: hidden;\r\n  float: left;\r\n}\r\n\r\ndiv {\r\n  cursor: pointer;\r\n}\r\n\r\n.stars {\r\n  width: 120px;\r\n  color: goldenrod;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/rating/rating.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css\">\r\n\r\n<div class=\"crop\" [style.width.px]=\"starWidth\" [title]=\"rating\">\r\n  <div class=\"stars\">\r\n    <span class=\"fa fa-star\"></span>\r\n    <span class=\"fa fa-star\"></span>\r\n    <span class=\"fa fa-star\"></span>\r\n    <span class=\"fa fa-star\"></span>\r\n    <span class=\"fa fa-star\"></span>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/rating/rating.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RatingComponent = /** @class */ (function () {
    function RatingComponent() {
    }
    RatingComponent.prototype.ngOnChanges = function () {
        this.starWidth = this.rating * 95 / 5;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], RatingComponent.prototype, "rating", void 0);
    RatingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pm-star',
            template: __webpack_require__("../../../../../src/app/rating/rating.component.html"),
            styles: [__webpack_require__("../../../../../src/app/rating/rating.component.css")]
        })
    ], RatingComponent);
    return RatingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/service/yelp-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YelpServiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var YelpServiceComponent = /** @class */ (function () {
    function YelpServiceComponent(_http) {
        this._http = _http;
        this._businessUrlPhone = 'https://api.yelp.com/v3/businesses/search/phone';
        this.apiKey = 'Bearer ' +
            'tcYrZMyNTdiX8a-5nq_-AOjuFXLqCho_lKJsYYfNXcvW0qm6R818hmVrOLFjzTFVbTOQ6dTSNTVv_X3aayZY0E3QRt0D3gX54X1a9BC6PRqCsRT3EDyMpj6DNiVuWnYx';
        this.apiKey2 = 'Bearer ' +
            'PmE9JqxgeY4KHerH0cr2M-Alyz2OH9rQ426kjiM7z84Yd07Rp1c0-RlLmptVWOSR4Ekl3mN1WxrXq1bOEQAY80JCOaWnCnF6K7ytvS4wklNtKaxq_5M9m7Ntf0NyWnYx';
        this._businessUrl = 'https://api.yelp.com/v3/businesses/search';
        this._businessUrlId = 'https://api.yelp.com/v3/businesses/';
        this._jsonRecipe = './assets/recipes';
    }
    YelpServiceComponent.prototype.getBusiness = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this.apiKey);
        var phone = '+528183479206';
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().set('phone', phone); // create params object
        return this._http
            .get(this._businessUrlPhone + '?', {
            params: params,
            headers: headers
        })
            .do(function (data) { return console.log(data); })
            .catch(this.handleError);
    };
    // getBusinessByLocation(geolocationPosition, category): Observable < Business[] > {
    YelpServiceComponent.prototype.getBusinessByLocation = function (category) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this.apiKey);
        var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]({
            fromObject: {
                // latitude: geolocationPosition.latitude,
                // longitude: geolocationPosition.longitude,
                latitude: localStorage.getItem('latitude'),
                longitude: localStorage.getItem('longitude'),
                categories: category,
                limit: '5'
            }
        });
        return this._http
            .get(this._businessUrl + '?', {
            params: searchParams,
            headers: headers
        })
            .map(function (data) {
            console.log(data);
            return data;
        })
            .catch(this.handleError);
    };
    YelpServiceComponent.prototype.getBusinessById = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this.apiKey2);
        return this._http
            .get(this._businessUrlId + id, {
            headers: headers
        })
            .map(function (data) {
            console.log(data);
            return data;
        })
            .catch(this.handleError);
    };
    YelpServiceComponent.prototype.getJsonRecipe = function (type) {
        return this._http
            .get(this._jsonRecipe + '/' + type + '.json')
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    YelpServiceComponent.prototype.handleError = function (err) {
        console.log(err);
        console.log(err.message);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err.message);
    };
    YelpServiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], YelpServiceComponent);
    return YelpServiceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/team/team.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#equipo{\r\n\twidth: 100%;\r\n\tbackground-size: cover;\t\r\n\tpadding: 0%;\r\n\tmargin: 0%;\r\n\t}\r\n\r\n.content{\r\n\tbackground-color: black;\r\n    background-repeat: no-repeat;\r\n\tbackground-position: cover; \r\n\toverflow: hidden;\r\n}\r\n\r\n.boton{\r\n\tmargin: auto;\r\n\tbackground-color: black;\r\n\theight: 100px;\r\n\twidth: auto;\r\n\ttext-align: center;\r\n\ttext-decoration: none;\r\n\tborder: 1px solid #37ddcf;\r\n\tcolor:  rgb(216, 216, 216);\r\n\tfont-family: 'Lato', sans-serif;\r\n\tfont-weight: bold;\r\n\tletter-spacing: 3px;\r\n\tdisplay: inline-block;\r\n\tmargin-bottom: 20px;\r\n\tpadding-left: 5%;\r\n\tpadding-right: 5%;\r\n\tborder-radius: 5px;\r\n}\r\n\r\n.boton:hover{\r\n\tbackground-color: #37ddcf;\r\n\tcolor: rgb(209, 27, 66);\r\n\tfont-weight: bolder;\r\n}\r\n\r\n.takeback{\r\n\tmargin: auto;\r\n\tbackground-color: black;\r\n\theight: 50px;\r\n\twidth: auto;\r\n\ttext-align: center;\r\n\ttext-decoration: underline;\r\n\tborder: none;\r\n\tcolor: rgb(209, 27, 66);\r\n\tfont-family: 'Lato', sans-serif;\r\n\tletter-spacing: 1px;\r\n}\r\n\r\n.a:link{\r\n\tcolor: rgb(209, 27, 66);\r\n}\r\n\r\n.a:active{\r\n\tcolor: rgb(209, 27, 66);\r\n}\r\n\r\n.a:hover{\r\n\tcolor: rgb(236, 62, 86);\r\n}\r\n\r\n.six{\r\n\twidth: 30%;\r\n\toverflow: hidden;\r\n\tposition: relative;\r\n\tpadding: 20px;\r\n}\r\n\r\n#logo{\r\n\twidth: 40%;\r\n\theight: auto;\r\n\tmargin: auto;\r\n\tmargin-top: 0%;\r\n\tdisplay: inline-block;\r\n}\r\n\r\n#meet{\r\n\tfont-size: 40px;\r\n\tletter-spacing: 8px;\r\n\tfont-family: 'Lato', sans-serif;\r\n\ttext-align: center;\r\n\tcolor: rgb(216, 216, 216);\r\n\tmargin-top: -20%;\r\n\tposition: relative;\r\n\r\n}\r\n\r\n#descripcion{\r\n\tfont-size: 20px;\r\n\twidth: 60%;\r\n\tmargin: auto;\r\n\tletter-spacing: 1px;\r\n\tfont-family: 'Lato', sans-serif;\r\n\ttext-align: center;\r\n\tcolor: rgb(150, 150, 150);\r\n\tpadding-top: 3%;\r\n}\r\n\r\n.vl {\r\n    border-left: 1px solid rgb(209, 27, 66);\r\n    height: 300px;\r\n    position: relative;\r\n    left: 50%;\r\n\tmargin-left: -3px;\r\n\tmargin-bottom: 30px;\r\n\r\n}\r\n\r\nh3{\r\n\tfont-family: 'Rubik', sans-serif;\r\n\tcolor: #37ddcf;\r\n\tfont-size: 20px;\r\n\r\n}\r\n\r\nh4{\r\n\tfont-size: 14px;\r\n\tcolor:rgb(117, 117, 117);\r\n\tletter-spacing: .1px;\r\n\tfont-family: 'Lato', sans-serif;\r\n\tfont-weight: bold;\r\n}\r\n\r\np{\r\n    font-size: 18px;\r\n\twidth: 60%;\r\n\tmargin: auto;\r\n\tletter-spacing: 1px;\r\n\tfont-family: 'Lato', sans-serif;\r\n\ttext-align: center;\r\n    color: rgb(150, 150, 150);\r\n    padding-bottom: 3%;\r\n}\r\n\r\n#small{\r\n\tfont-size: 12px;\r\n\tcolor: #37ddcf;\r\n    letter-spacing: 3px;\r\n    text-align: center;\r\n}\r\n\r\n/////////////////////////////////////////////////\r\n\r\n.row{\r\n\twidth: 70%;\r\n}\r\n\r\n.right{\r\n\twidth: 80%;\r\n\theight: 30% static;\r\n\ttext-align: right;\r\n\tmargin-top: 15%;\r\n\tdisplay: inline-block;\r\n\tmargin-left: 10%;\r\n}\r\n\r\n.circle-right{\t\r\n\t\tbackground-image: url(\"http://www.math.uni-frankfurt.de/~person/_4170854.jpg\");\r\n\t\tbackground-size: 100px;\r\n\t\tbackground-repeat: no-repeat;\r\n\t\tbackground-size: cover;\r\n\t\tbackground-position: center;\r\n\t\theight:100px;\r\n\t\twidth: 100px;\r\n\t\tborder-radius: 50%;\r\n\t\tfloat: right;\r\n\t\t-webkit-filter: contrast(120%) grayscale(100%) drop-shadow(0px 0px 30px rgba(196, 253, 255, 0.459));\r\n\t\t        filter: contrast(120%) grayscale(100%) drop-shadow(0px 0px 30px rgba(196, 253, 255, 0.459)); \r\n}\r\n\r\n.circle-left{\t\r\n\tbackground-image: url(\"http://www.math.uni-frankfurt.de/~person/_4170854.jpg\");\r\n\tbackground-size: 100px;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: cover;\r\n\tbackground-position: center;\r\n\theight:100px;\r\n\twidth: 100px;\r\n\tborder-radius: 50%;\r\n\tfloat: left;\r\n\t-webkit-filter: contrast(120%) grayscale(100%) drop-shadow(0px 0px 30px rgba(196, 253, 255, 0.459));\r\n\t        filter: contrast(120%) grayscale(100%) drop-shadow(0px 0px 30px rgba(196, 253, 255, 0.459));\r\n\r\n}\r\n\r\n.circle-left:hover{\r\n\t-webkit-filter: drop-shadow(0px 0px 30px #37ddcf) \r\n\t\t\tcontrast(120%);\r\n\t        filter: drop-shadow(0px 0px 30px #37ddcf) \r\n\t\t\tcontrast(120%);\r\n}\r\n\r\n.circle-right:hover{\r\n\t-webkit-filter: drop-shadow(0px 0px 30px #37ddcf) \r\n\t\t\tcontrast(120%);\r\n\t        filter: drop-shadow(0px 0px 30px #37ddcf) \r\n\t\t\tcontrast(120%);\r\n}\r\n\r\n.text-right{\r\n\twidth: 60%;\r\n\tfloat: left;\r\n\tpadding-right: 8%;\r\n}\r\n\r\n.text-left{\r\n\tfloat: right;\r\n\twidth: 60%;\r\n\tpadding-left: 8%;\r\n}\r\n\r\n#marcos{\r\n\tbackground-image: url(" + escape(__webpack_require__("../../../../../src/assets/fotosequipo/marcos.jpg")) + ");\r\n}\r\n\r\n#ana{\r\n\tbackground-image: url(" + escape(__webpack_require__("../../../../../src/assets/fotosequipo/ana.png")) + ");\r\n}\r\n\r\n#orlando{\r\n\tbackground-image: url(" + escape(__webpack_require__("../../../../../src/assets/fotosequipo/orlando.png")) + ");\r\n}\r\n\r\n#eli{\r\n\tbackground-image: url(" + escape(__webpack_require__("../../../../../src/assets/fotosequipo/eli.jpg")) + ");\r\n}\r\n\r\n#edgar{\r\n\tbackground-image: url(" + escape(__webpack_require__("../../../../../src/assets/fotosequipo/edgar.jpg")) + ");\r\n}\r\n\r\n#lorena{\r\n\tbackground-image: url(" + escape(__webpack_require__("../../../../../src/assets/fotosequipo/lorena.jpg")) + ");\r\n}\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/team/team.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\t<title>Sinister Six</title>\r\n\t<!-- <link href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\"> -->\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"/team.component.css\">\r\n\t<link href=\"https://fonts.googleapis.com/css?family=Lato:300\" rel=\"stylesheet\">\r\n\t<link href=\"https://fonts.googleapis.com/css?family=Rubik:500\" rel=\"stylesheet\">\r\n\r\n\r\n\t<!--Título-->\r\n\r\n\r\n\t<div class=\"content\">\r\n\r\n\r\n\t\t\t<img class=\"six\" id=\"six\" src=\"../../assets/fotosequipo/pngconglo.png\">\r\n\t\t\t<br>\r\n\r\n\r\n\t  <div class=\"container main-section\">\r\n\t\t\t\t<h1 id=\"meet\"> MEET OUR TEAM </h1>\r\n\t\t\t\t<h2 id=\"descripcion\">We are<img id=\"logo\" src=\"../../assets/fotosequipo/sinister6no.png\" alt=\"logo\" title=\"Sinister Six\">, <br>a team of highly motivated developers based in Monterrey, México.</h2> \r\n        <br>\r\n\t\t\t\t<p>We embarked on a 2-week journey to do our best to deliver your next favorite food finding app, whilst showcasing our design and front-end skills.</p>\r\n\t\t\t\t<p id=\"small\">SCROLL DOWN FOR MORE</p>\r\n\t  </div>\r\n\t  \r\n\t  <div class=\"vl\"></div>\r\n\r\n\t<!-- Members -->\r\n\t<section class=\"members\" id=\"members\">\r\n\t\t\r\n\t\t<div class=\"container\">\r\n\t\t\t\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-md-6 col-sm-12\">\r\n\t\t\t\t\t<div class=\"right\">\r\n\t\t\t\t\t\t<div class=\"circle-right\" id=\"marcos\"></div>\r\n\t\t\t\t\t\t<div class=\"text-right\">\r\n\t\t\t\t\t\t\t<h3>Marcos Isunza</h3>\r\n\t\t\t\t\t\t\t<h4>API guru, chocolate-lover and main project architect. <br>Very patient guy.</h4>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-6 col-sm-12\">\r\n\t\t\t\t\t\t<div class=\"right\">\r\n\t\t\t\t\t\t\t\t<div class=\"text-left\">\r\n\t\t\t\t\t\t\t\t<h3>Ana Sánchez</h3>\r\n\t\t\t\t\t\t\t\t<h4>Delivery lead and early bird. Never leaves a doubt unanswered.</h4>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"circle-left\" id=\"ana\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\t\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-md-6 col-sm-12\">\r\n\t\t\t\t\t<div class=\"right\">\r\n\t\t\t\t\t\t<div class=\"circle-right\" id=\"orlando\"></div>\r\n\t\t\t\t\t\t<div class=\"text-right\">\r\n\t\t\t\t\t\t\t<h3>Orlando Amaro</h3>\r\n\t\t\t\t\t\t\t<h4>Expert at group-naming and singer. Master of interaction developing.</h4>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-6 col-sm-12\">\r\n\t\t\t\t\t\t<div class=\"right\">\r\n\t\t\t\t\t\t\t\t<div class=\"text-left\">\r\n\t\t\t\t\t\t\t\t<h3>Elizabeth Gámez</h3>\r\n\t\t\t\t\t\t\t\t<h4>ft. Princesa<br>Natural ability for binge-watching Shrek and binge-eating sushi.</h4>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"circle-left\" id=\"eli\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t</div>\t\t\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-md-6 col-sm-12\">\r\n\t\t\t\t\t<div class=\"right\">\r\n\t\t\t\t\t\t<div class=\"circle-right\" id=\"edgar\"></div>\r\n\t\t\t\t\t\t<div class=\"text-right\">\r\n\t\t\t\t\t\t\t<h3>Edgar Sánchez</h3>\r\n\t\t\t\t\t\t\t<h4>Skilled researcher, youtube tutorials devourer, and verified geek. Always willing to help the team.</h4>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-6 col-sm-12\">\r\n\t\t\t\t\t\t<div class=\"right\">\r\n\t\t\t\t\t\t\t\t<div class=\"text-left\">\r\n\t\t\t\t\t\t\t\t<h3>Lorena Vargas</h3>\r\n\t\t\t\t\t\t\t\t<h4>Scrum master and interface designer.<br>95% classic rock junkie, 5% OCD. </h4>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"circle-left\" id=\"lorena\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t</div>\t\t\t\r\n\t\t\t<br>\r\n\t\t\t<br>\r\n\t\t\t<br>\r\n\t\t\t<div class=\"vl\"></div>\r\n\t\t\t<br>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-12 text-center\">\r\n\t\t\t\t<button class=\"boton\">CONTACT US</button><br>\r\n\t\t\t\t<button class=\"takeback\" [routerLink]=\"['/homepage.component.html#top']\">Not today, take me back to FoodieJournal</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n      <!-- <div class=\"row\">\r\n\t\t\t\t<div class=\"col-md-12 text-center\"> -->\r\n\t\t\t\t\t  \r\n\t\t\t\t<!-- </div>\r\n\t\t\t</div> -->\r\n\t\t</div>\r\n\r\n\t\t\r\n  </section>\r\n  <img id=\"equipo\" src=\"../../assets/fotosequipo/equipo.png\t\" alt=\"logo\">\r\n\t</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/team/team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeamComponent = /** @class */ (function () {
    function TeamComponent() {
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    TeamComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-team',
            template: __webpack_require__("../../../../../src/app/team/team.component.html"),
            styles: [__webpack_require__("../../../../../src/app/team/team.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/bg-img1.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bg-img1.87c84fb49e1ffad15d29.jpg";

/***/ }),

/***/ "../../../../../src/assets/bg-img2.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bg-img2.c53f797c533125c52f09.jpg";

/***/ }),

/***/ "../../../../../src/assets/fotosequipo/ana.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ana.64e89d82228e6ae25a2a.png";

/***/ }),

/***/ "../../../../../src/assets/fotosequipo/edgar.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "edgar.80f5ea75b860b00ec0e6.jpg";

/***/ }),

/***/ "../../../../../src/assets/fotosequipo/eli.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "eli.8be042b852ee303f03a7.jpg";

/***/ }),

/***/ "../../../../../src/assets/fotosequipo/lorena.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "lorena.4afe5d083980a9b53366.jpg";

/***/ }),

/***/ "../../../../../src/assets/fotosequipo/marcos.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "marcos.548d5e67833b1ae3ced5.jpg";

/***/ }),

/***/ "../../../../../src/assets/fotosequipo/orlando.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "orlando.cad387618e3de238ab17.png";

/***/ }),

/***/ "../../../../../src/cust-ext-browser-xhr.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustExtBrowserXhr; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustExtBrowserXhr = /** @class */ (function (_super) {
    __extends(CustExtBrowserXhr, _super);
    function CustExtBrowserXhr() {
        return _super.call(this) || this;
    }
    CustExtBrowserXhr.prototype.build = function () {
        var xhr = _super.prototype.build.call(this);
        xhr.withCredentials = true; // this is all the magic we need for now
        return (xhr);
    };
    CustExtBrowserXhr = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
        /**
         * @author AhsanAyaz
         * We're extending the BrowserXhr to support CORS
         */
        ,
        __metadata("design:paramtypes", [])
    ], CustExtBrowserXhr);
    return CustExtBrowserXhr;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* BrowserXhr */]));



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map