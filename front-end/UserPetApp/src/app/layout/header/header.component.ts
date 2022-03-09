import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() isOpen: Boolean | undefined;
  @Output() emitter:EventEmitter<Boolean> = new EventEmitter();
  constructor(public authService:AuthService, private router:Router) { }
  ngOnInit(): void {
    let loggedInUser = this.authService.getAuth();
    if(!loggedInUser.userName){
      this.router.navigateByUrl("/(louginOutlet:login)");
    }
  }

  toggleDrawer(){
    this.isOpen = !this.isOpen;
    this.emitter.emit(this.isOpen)
  }

  myPets(){
    this.router.navigateByUrl("/myPets")
  }
}
