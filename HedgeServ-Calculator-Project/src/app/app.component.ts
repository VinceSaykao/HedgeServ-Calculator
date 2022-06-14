import { Component, NgModule } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  toshow = '0'
  currvalue = ''

  // attribute binding: 

  // this takes in a pressed number and input it
  writetoinput(value:string){
    this.currvalue = this.currvalue + value
    this.toshow = this.currvalue
  }

  // when equal is pressed, it will do calculation and display it
  equals() {
    this.toshow = eval(this.currvalue)
    this.currvalue = this.toshow
  }

  // when clear is pressed, it will clear the display and all inputs to an empty string
  clear() {
    this.currvalue = '';
    this.toshow = this.currvalue
  }


  // calcvalue(solve:any) {
  //   if(solve.charAt(0) == '0') {
  //     solve = solve.slice(1,)
  //   }
  //   this.toshow = eval(solve)
  // }

}
