import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nav[app-navbar]',
  host:     { 'class': 'navbar navbar-fixed-top navbar-light bg-faded' },
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  title: string = 'CareNet';
  isCollapsed: boolean;

  constructor(public router: Router) {}

  ngOnInit() {
    this.isCollapsed = true;
  }

  public collapsed(event: any): void {
  }

  public expanded(event: any): void {
  }

}
