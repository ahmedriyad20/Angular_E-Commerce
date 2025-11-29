import { Component } from '@angular/core';
import { StyleCom } from '../style-com/style-com';

@Component({
  selector: 'app-inline-com',
  imports: [StyleCom],
  // templateUrl: './inline-com.html',
  // styleUrl: './inline-com.css'
  template: `<p>any text from ts</p>
  <div><app-style-com></app-style-com></div>`,
  styles: [
    `
      p {
        color: blue;
        font-weight: bold;
      }
    `,
  ],
})
export class InlineCom {

}
