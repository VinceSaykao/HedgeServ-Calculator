import { Component, NgModule } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  toshow = '0'
  currvalue = ''

  writetoinput(value:string){
    this.currvalue = this.currvalue + value
    this.toshow = this.currvalue

  }

}
