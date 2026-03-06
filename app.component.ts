import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  //  injecting the api service or app service into our component like: app component
  constructor(private apiService: AppService) {}
  users: any[] =[];
  ngOnInit(): void {
    this.apiService.getUsers()
    .subscribe(user =>{
      this.users = user
    })    
  }
}
