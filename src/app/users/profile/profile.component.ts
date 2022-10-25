import { User } from './../../core/model/user';
import { UserService } from './../../core/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public user :User;
  constructor(private route: ActivatedRoute,
    private userService: UserService)
  { }

  ngOnInit(): void {
   let id= this.route.snapshot.params['id'];
   let list: User[]
    list = this.userService.list.filter(
      user => user.id== id) as any
    this.user= list[0]
  }

}
