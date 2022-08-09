import { Component } from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  myname = "Anil";

  language : string = '';
  ListofLanguages : string[] = [];

    AddLanguage(){
      this.ListofLanguages.push(this.language);
      this.language = '';
      console.log(this.ListofLanguages);
    }
    RemoveLanguage(){
      this.ListofLanguages.pop();
      console.log(this.ListofLanguages);
    }

  // constructor(private router: Router){
    
  //   router.events.filter(event => event instanceof NavigationEnd)
  //         .subscribe(event => 
  //          {
  //             this.currentRoute = event.url;          
  //             console.log(event);
  //          });
  //   }
}

