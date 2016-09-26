import { Component, Input,  OnInit } from '@angular/core';
import { UserService }      from './user.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() subtitle = '';
  title = 'Angular Modules';
  user = '';


  constructor(userService: UserService) {
    this.user = userService.userName;
  }

  ngOnInit() {
  }

}
