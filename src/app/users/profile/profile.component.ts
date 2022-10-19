import { User } from './../../core/model/user';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public user :User;
  constructor(private route: ActivatedRoute)
  { }

  ngOnInit(): void {
   let id= this.route.snapshot.params['id'];
   //search the profile of user with this id
   //go to session 7: Service where you can find the implementation of this section
  }

}
