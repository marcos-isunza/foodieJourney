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

  private _businessUrl = 'https://api.yelp.com/v3/businesses/search';

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
    console.log(category + 'eexito');
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
      //.do(data => console.log(data))
        .map(data => {
        console.log(data);
        return data;
      })
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err);
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
