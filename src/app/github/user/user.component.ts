import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../store';

@Component({
  selector: 'app-github-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() user: User;

  constructor() { }
}
