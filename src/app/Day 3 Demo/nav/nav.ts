import { Component, effect, inject, Signal } from '@angular/core';
import { UserService } from '../user-list/user-service';
import { Iuser } from '../user-list/iuser';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
  userServeObj = inject(UserService);
  SelectedUsers!: any;

  user = effect(() => {
    this.SelectedUsers = this.userServeObj.getSelectedUsers();
  })
}
