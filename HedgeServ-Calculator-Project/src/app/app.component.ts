import { Component, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  // property messages
  // messages = this.http.get<any[]>('http://localhost:4201');

  // loadedPosts = [];

  // // inject http client
  // constructor(private http: HttpClient) {}

  // post() {
  //   this.http.post('http://localhost:4201/history', {username: 'vince', password: 'saykao'})
  //   .subscribe(next => console.log(next));
  // }




}
