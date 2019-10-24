import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/authentication/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private session:SessionService) {
    
   }

  isAuthenticated: boolean = true;

  ngOnInit() {
    this.session.authenticated.subscribe(v => this.isAuthenticated = v);
  }


}
