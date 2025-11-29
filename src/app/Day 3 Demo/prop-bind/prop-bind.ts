import { Component } from '@angular/core';

@Component({
  selector: 'app-prop-bind',
  imports: [],
  templateUrl: './prop-bind.html',
  styleUrl: './prop-bind.css',
  // host: {class: 'container', '(click)': 'toggle()'}
})
export class PropBind {
  imgSrc = "img/m_n.jpg";
    imgsrc2 = 'img/f_n.jpg';
    is_m = true;
  username = "admin";
  pstyle = {
    color: 'red',
    'font-size': '33px',
    'background-color' : 'blue'
  }

  clsasses = ['one']

  toggle()
  {
    this.is_m = !this.is_m
  }
}
