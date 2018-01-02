import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';
import {BreakpointObserver} from '@angular/cdk/layout';
import {Router} from '@angular/router';

@Component({
  selector: 'ca-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit {


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
