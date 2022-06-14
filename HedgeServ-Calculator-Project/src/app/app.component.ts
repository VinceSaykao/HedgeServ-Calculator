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

  equals() {
    this.toshow = eval(this.currvalue)
    this.currvalue = this.toshow
  }

  clear() {
    this.currvalue = '';
    this.toshow = this.currvalue
  }

  calcvalue(solve:any) {
    if(solve.charAt(0) == '0') {
      solve = solve.slice(1,)
    }
    this.toshow = eval(solve)
  }

}
