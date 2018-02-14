import { RouterTestingModule } from '@angular/router/testing';
import {
  TestBed,
  async,
  getTestBed,
  ComponentFixture
} from '@angular/core/testing';
import { YelpServiceComponent } from './yelp-service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { MouseEvent } from '@agm/core';

export class YelpServiceComponentMock {}
describe('AppComponent', () => {
  let component: YelpServiceComponent;
  let fixture: ComponentFixture<YelpServiceComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [YelpServiceComponent],
        imports: [RouterTestingModule, HttpClientModule, HttpModule],
        providers: [
          { provide: YelpServiceComponent, useClass: YelpServiceComponentMock }
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(YelpServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
