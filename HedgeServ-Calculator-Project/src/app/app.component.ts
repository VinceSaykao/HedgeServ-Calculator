import { Component, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {

  loadedPosts = [];

  // inject http client
  constructor(private http: HttpClient) {}

  // ngOnInit() {}

  onCreatePost(postData: {title: string; content: string}) {
    // send Http request
    this.http
    //send js object, what user presses in
    .post<{ input: string }>(
      'https://google.com',
      postData
    )
    .subscribe(responseData => {
      console.log(responseData);
    });
  }


}
