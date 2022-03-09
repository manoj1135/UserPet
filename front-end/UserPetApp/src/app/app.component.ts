import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isOpen:Boolean | undefined = false;
  showFiller = false;
  title = 'UserPetApp';

  toggleDrawer(data:Boolean){
    this.isOpen = data;
  }
}
