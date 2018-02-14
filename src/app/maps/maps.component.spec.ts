import { RouterTestingModule } from '@angular/router/testing';
import {
  TestBed,
  async,
  getTestBed,
  ComponentFixture
} from '@angular/core/testing';
import { MapsComponent } from './maps.component';
import { YelpServiceComponent } from './../service/yelp-service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { MouseEvent } from '@agm/core';

export class YelpServiceComponentMock {}
describe('AppComponent', () => {
  let component: MapsComponent;
  let fixture: ComponentFixture<MapsComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [MapsComponent],
        imports: [RouterTestingModule, HttpClientModule, HttpModule],
        providers: [
          { provide: YelpServiceComponent, useClass: YelpServiceComponentMock }
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should onChanges zoom ok', () => {
    component.ngOnChanges();
    expect(component.zoom).toBe(16);
  });
});
