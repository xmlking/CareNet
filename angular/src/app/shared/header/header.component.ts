import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header[app-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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
