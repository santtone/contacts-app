import {Component, OnInit, ViewChild} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {MatSidenav} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'ca-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  smallScreenQuery = '(max-width: 599px)';
  isSmallScreen: boolean;
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
    this.isSmallScreen = breakpointObserver.isMatched(this.smallScreenQuery);
  }

  ngOnInit(): void {
    this.breakpointObserver.observe([
      this.smallScreenQuery
    ]).subscribe(result => {
      this.isSmallScreen = result.matches;
      this.toggleSidenav();
    });
  }

  toggleSidenav() {
    if (this.sidenav) {
      this.sidenav.toggle();
    }
  }

  navigateToContacts() {
    this.router.navigate(['/contacts']);
  }

  navigateToSettings() {
    this.router.navigate(['/settings']);
  }

}
