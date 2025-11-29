import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PropBind } from "./Day 3 Demo/prop-bind/prop-bind";
import { StyleCom } from './Day 3 Demo/style-com/style-com';
import { InlineCom } from './Day 3 Demo/inline-com/inline-com';
import { UserList } from './Day 3 Demo/user-list/user-list';
import { Nav } from './Day 3 Demo/nav/nav';
import { Home } from './home/home';
import { Aside } from './aside/aside';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet, PropBind, StyleCom, InlineCom, UserList, Nav],
  imports: [RouterOutlet, Home, Aside],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}
