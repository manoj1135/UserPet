import { BooleanInput } from '@angular/cdk/coercion';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnChanges{
  @Input() isOpen:Boolean | undefined;
  constructor(public authService:AuthService) { }
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
    console.log("aa ",this.authService.getLoggedInUserName());

  }

  isUserLoggedIn():BooleanInput{
    return !(this.authService.getLoggedInUserName() == "Guest");
  }

}
