import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router, private activedRoute: ActivatedRoute, private sessionService: SessionService) { }

  ngOnInit() {
      this.sessionService.clearSession();
      this.router.navigate(['../login'],{
        relativeTo: this.activedRoute
      })
  }

}
