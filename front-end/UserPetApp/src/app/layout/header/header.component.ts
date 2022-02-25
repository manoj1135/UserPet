import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() drawer:MatDrawer | undefined;
  constructor(public authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    let loggedInUser = this.authService.getAuth();
    if(!loggedInUser.userName){
      this.router.navigateByUrl("/(louginOutlet:login)");
    }
  }

  toggleDrawer(){
    this.drawer?.toggle();
  }

  myPets(){
    this.router.navigateByUrl("/myPets")
  }
}
