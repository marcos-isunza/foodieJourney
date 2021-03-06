import { RouterTestingModule } from '@angular/router/testing';
import {
  TestBed,
  async,
  getTestBed,
  ComponentFixture
} from '@angular/core/testing';
import { DetailsComponent } from './details.component';
import { YelpServiceComponent } from '../service/yelp-service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

export class YelpServiceComponentMock {}
describe('AppComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [DetailsComponent],
        imports: [
          RouterTestingModule,
          HttpClientModule,
          HttpModule,
          Ng4LoadingSpinnerService
        ],
        providers: [
          { provide: YelpServiceComponent, useClass: YelpServiceComponentMock }
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
