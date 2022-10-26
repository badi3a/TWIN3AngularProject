import { UserService } from './../../core/services/user.service';
import { User } from '../../core/model/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  list: User[]
  constructor(private userService: UserService) {

   }
  ngOnInit(): void {
    this.list=this.userService.list
  }


}
