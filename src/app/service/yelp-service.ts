import {
  Business
} from './../business-interface';
import {
  Injectable
} from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse
} from '@angular/common/http';
import {
  Observable
} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import {
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import { Response } from '@angular/http';

@Injectable()
export class YelpServiceComponent {

  private _businessUrlPhone = 'https://api.yelp.com/v3/businesses/search/phone';
  private apiKey = 'Bearer ' + 'tcYrZMyNTdiX8a-5nq_-AOjuFXLqCho_lKJsYYfNXcvW0qm6R818hmVrOLFjzTFVbTOQ6dTSNTVv_X3aayZY0E3QRt0D3gX54X1a9BC6PRqCsRT3EDyMpj6DNiVuWnYx';
  private apiKey2 = 'Bearer ' + 'PmE9JqxgeY4KHerH0cr2M-Alyz2OH9rQ426kjiM7z84Yd07Rp1c0-RlLmptVWOSR4Ekl3mN1WxrXq1bOEQAY80JCOaWnCnF6K7ytvS4wklNtKaxq_5M9m7Ntf0NyWnYx';
  private _businessUrl = 'https://api.yelp.com/v3/businesses/search';
  private _businessUrlId = 'https://api.yelp.com/v3/businesses/';
  private _jsonRecipe ='./assets/recipes';

  constructor(private _http: HttpClient) {}

  getBusiness(): Observable < Business[] > {
    let headers = new HttpHeaders().set('Authorization', this.apiKey);
    let phone = '+528183479206';
    let params = new HttpParams().set('phone', phone); // create params object
    return this._http.get < Business > (this._businessUrlPhone + '?', {
        params: params,
        headers: headers
      })
     .do(data => console.log(data))
      .catch(this.handleError);
  }

  getBusinessByLocation(geolocationPosition, category): Observable < Business[] > {
    let headers = new HttpHeaders().set('Authorization', this.apiKey);
    let searchParams = new HttpParams({
    fromObject: {
        'latitude': geolocationPosition.latitude,
        'longitude': geolocationPosition.longitude,
        'categories': category,
        'limit': '6'
    }
});
    return this._http.get < Business > (this._businessUrl + '?', {
        params: searchParams ,
        headers: headers
      })
        .map(data => {
        console.log(data);
        return data;
      })
      .catch(this.handleError);
  }

  getBusinessById(id){
  let headers = new HttpHeaders().set('Authorization', this.apiKey2);
  return this._http.get(this._businessUrlId + id, {
          headers: headers
        })
          .map(data => {
            console.log(data);
          return data;
        })
        .catch(this.handleError);
  }

  getJsonRecipe(type): Observable<any[]>{
    return this._http.get(this._jsonRecipe +'/' + type + '.json')
    .do(data => console.log('All: ' + JSON.stringify(data)))
    .catch(this.handleError);
  }


  private handleError(err: HttpErrorResponse) {
    console.log(err);
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
