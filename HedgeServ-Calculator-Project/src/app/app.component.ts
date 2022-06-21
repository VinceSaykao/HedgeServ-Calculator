import { Component, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  loadedPosts = [];

  // inject http client
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onCreatePost(postData: {title: string; content: string}) {
    // send Http request
    this.http
    .post(
      'https://google.com',
      postData
    )
    .subscribe(responseData => {
      console.log(responseData);
    });
  }


}
