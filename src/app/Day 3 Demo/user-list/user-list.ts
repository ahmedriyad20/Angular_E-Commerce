import { Component, inject } from '@angular/core';
import { UserService } from './user-service';
import { Iuser } from './iuser';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList {
  userList!: any[];
  // constructor(private userServ: UserService)
  // {
  //   this.userList = userServ.getAllUsers();
  //   console.log(this.userList);
    
  // }
  userServ = inject(UserService);
  ngOnInit()
  {
    this.userList = this.userServ.getAllUsers();
    console.log(this.userList);
    
  }
  AddUser(user:Iuser)
  {
    this.userServ.addSelectedUser(user);
  }
}
