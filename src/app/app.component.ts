import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  routeLinks: any[];
  activeLinkIndex = 0;
  constructor(private router: Router) {
    this.routeLinks = [
      {label: 'Home', link: ''},
      {label: 'Tasks', link: 'tasks'}
    ];
  }
}
