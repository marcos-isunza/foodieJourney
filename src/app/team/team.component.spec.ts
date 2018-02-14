import { RouterTestingModule } from '@angular/router/testing';
import {
  TestBed,
  async,
  getTestBed,
  ComponentFixture
} from '@angular/core/testing';
import { TeamComponent } from './team.component';
import { YelpServiceComponent } from './../service/yelp-service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

export class YelpServiceComponentMock {}
describe('AppComponent', () => {
  let component: TeamComponent;
  let fixture: ComponentFixture<TeamComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [TeamComponent],
        imports: [RouterTestingModule, HttpClientModule, HttpModule],
        providers: [
          { provide: YelpServiceComponent, useClass: YelpServiceComponentMock }
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
