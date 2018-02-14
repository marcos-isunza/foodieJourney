import { RouterTestingModule } from '@angular/router/testing';
import {
  TestBed,
  async,
  getTestBed,
  ComponentFixture
} from '@angular/core/testing';
import { BusinessesComponent } from './businesses.component';
import { YelpServiceComponent } from '../service/yelp-service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import { NO_ERRORS_SCHEMA } from '@angular/core';

export class YelpServiceComponentMock {}
describe('AppComponent', () => {
  let component: BusinessesComponent;
  let fixture: ComponentFixture<BusinessesComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [BusinessesComponent],
        imports: [RouterTestingModule, HttpClientModule, HttpModule],
        providers: [
          NgbTabsetConfig,
          { provide: YelpServiceComponent, useClass: YelpServiceComponentMock }
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  it('should onCloseHandled ok', () => {
    component.hide();
    expect(component.display).toBe('block');
    expect(component.hidden).toBe('none');
  });
});
