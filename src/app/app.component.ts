import { Business } from './business-interface';
import { Component, OnInit } from '@angular/core';
import { YelpServiceComponent } from './service/yelp-service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [YelpServiceComponent]
})
export class AppComponent implements OnInit {
  title = 'app';
  display = 'none';
  logname = 'Log In';
  sendTo = 'home';
  isLogin: boolean = false;
  constructor(private _businessService: YelpServiceComponent) {}

  open() {
    this.display = 'block';
  }
  onCloseHandled() {
    this.display = 'none';
  }
  ngOnInit(): void {}

  openNav() {
    document.getElementById('mySidenav').style.width = '150px';
    document.getElementById('main').style.marginLeft = '150px';
  }

  closeNav() {
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
  }

  logout() {
    this.logname = 'Log In';
    this.sendTo = 'challenges';
    this.isLogin = false;
    localStorage.setItem('login', 'false');
  }

  login() {
    this.sendTo = 'challenges';
    this.logname = 'Log Out';
    this.isLogin = true;
    this.display = 'none';
    localStorage.setItem('login', 'true');
  }
}

// start(){
//   if(this.logname == 'Log In'){
//     open();
//   }
//   else{
//     [routerLink]="['/challenges']"
//   }
// }
// }
