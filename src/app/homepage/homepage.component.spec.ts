import { RouterTestingModule } from '@angular/router/testing';
import {
  TestBed,
  async,
  getTestBed,
  ComponentFixture
} from '@angular/core/testing';
import { HomepageComponent } from './homepage.component';
import { YelpServiceComponent } from './../service/yelp-service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

export class YelpServiceComponentMock {}
describe('AppComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [HomepageComponent],
        imports: [RouterTestingModule, HttpClientModule, HttpModule],
        providers: [
          { provide: YelpServiceComponent, useClass: YelpServiceComponentMock }
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
