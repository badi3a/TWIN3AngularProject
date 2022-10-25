import { User } from './../model/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  list: User[]=[
    {
      id: 1,
      category: 'simple user',
      name: 'James Nix',
      job: 'Full Stack Developer',
      phone: '046 5685 6969',
      email:'JamesNix@spy.com',
      address:'5 Boar Lane SELLING 2LG',
      picture:'https://bootdey.com/img/Content/avatar/avatar2.png'
    },
    {
      id: 2,
      name: 'Darlene Smith',
      category: 'admin',
      job: 'UI/UX Designer',
      phone: '012 6587 1236',
      email:'DarleneSmith@spy.com',
      address:'57 Guildry Street GAMRIE',
      picture:'https://bootdey.com/img/Content/avatar/avatar3.png'
    },
    {
      id: 2,
      name: 'William Swift',
      category: 'simple user',
      job: 'Backend Developer',
      phone: '012 6587 1236',
      email:' WilliamSwift@spy.co',
      address:'80 South Street MONKW 7BR',
      picture:'https://bootdey.com/img/Content/avatar/avatar4.png'
    },
  ]
  constructor() { }
}
