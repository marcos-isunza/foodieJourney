import { RouterTestingModule } from '@angular/router/testing';
import {
  TestBed,
  async,
  getTestBed,
  ComponentFixture
} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { YelpServiceComponent } from './service/yelp-service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

export class YelpServiceComponentMock {}
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent],
        imports: [RouterTestingModule, HttpClientModule, HttpModule],
        providers: [
          { provide: YelpServiceComponent, useClass: YelpServiceComponentMock }
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should open ok', () => {
    component.open();
    expect(component.display).toBe('block');
  });
  it('should onCloseHandled ok', () => {
    component.onCloseHandled();
    expect(component.display).toBe('none');
  });
  it('should logout succesfully', () => {
    component.logout();
    expect(component.logname).toBe('Log In');
    expect(component.sendTo).toBe('challenges');
    expect(component.isLogin).toBe(false);
  });
  it('should login succesfully', () => {
    component.login();
    expect(component.logname).toBe('Log Out');
    expect(component.sendTo).toBe('challenges');
    expect(component.isLogin).toBe(true);
    expect(component.display).toBe('none');
  });
});
