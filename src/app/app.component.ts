import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  allMails = [
    {
      email: 'BILL@gates.com',
      importance: true,
      subject: 'New Windows',
      content: 'New Windows XI on 2100',
    },
    {
      email: 'aDA@lovelace.com',
      importance: false,
      subject: 'whatever',
      content: 'Whatever is the ultimate question of life',
    },
  ]

}
