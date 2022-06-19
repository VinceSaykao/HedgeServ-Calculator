import { Component, NgModule } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  // input and result will be data-type strings and start as empty strings
  input:string = '';
  result:string = '';

  
  // writetoinput method will take in a string argument
  writetoinput(num: string) {
    
    //Do Not Allow "." more than once
    if (num==".") {
      if (this.input != "" ) {
 
        const lastNum=this.getLastOperand()
        console.log(lastNum.lastIndexOf("."))
        if (lastNum.lastIndexOf(".") >= 0) return;
      }
    }
 
    //Do Not Allow 0 at beginning. 
    //Javascript will throw Octal literals are not allowed in strict mode.
    if (num=="0") {
      if (this.input== "" ) {
        return;
      }

      // if PrevKey equals operator it will return nothing
      const PrevKey = this.input[this.input.length - 1];
      if (PrevKey === '/' || PrevKey === '*' || PrevKey === '-' || PrevKey === '+')  {
          return;
      }
    }
 
    this.input = this.input + num
    this.calcAnswer();
  } // end of writetoinput
 
  // this method will get the last operand
  getLastOperand() {
    let pos:number;
    console.log(this.input)
    pos=this.input.toString().lastIndexOf("+")
    if (this.input.toString().lastIndexOf("-") > pos) pos=this.input.lastIndexOf("-")
    if (this.input.toString().lastIndexOf("*") > pos) pos=this.input.lastIndexOf("*")
    if (this.input.toString().lastIndexOf("/") > pos) pos=this.input.lastIndexOf("/")
    console.log('Last '+this.input.substr(pos+1))
    return this.input.substr(pos+1)
  } // end of getLastOperand
 
 
  pressOperator(op: string) {
 
    //Do not allow operators more than once
    const lastKey = this.input[this.input.length - 1];
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+')  {
      return;
    }
   
    this.input = this.input + op
    this.calcAnswer();
  } // end of pressOperator

  calcAnswer() {
    let formula = this.input;
 
    let lastKey = formula[formula.length - 1];
 
    if (lastKey === '.')  {
      formula=formula.substr(0,formula.length - 1);
    }
 
    lastKey = formula[formula.length - 1];
 
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+' || lastKey === '.')  {
      formula=formula.substr(0,formula.length - 1);
    }
 
    console.log("Formula " +formula);
    this.result = eval(formula);
  }

  // .substr returns a portion of the string but delete the last input
  back() {
    if (this.input !="" ) {
      this.input=this.input.substr(0, this.input.length-1)
    }
  }

  // clears the results and input 
  clear() {
    this.result = '';
    this.input = '';
    console.log('cleared');
  }


  // when equals is pressed it will find results through calculations
  equals() {
    this.calcAnswer();
    this.input = this.result;
    if (this.input=="0") this.input="";
  }


  // where calculation is done
  // identifies the last character, if decimal or operator will remove it will be removed
  calcvalue() {
    let formula = this.input;
 
    let lastKey = formula[formula.length - 1];
 
    if (lastKey === '.')  {
      formula=formula.substr(0,formula.length - 1);
    }
 
    lastKey = formula[formula.length - 1];
 
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+' || lastKey === '.')  {
      formula=formula.substr(0,formula.length - 1);
    }
 
    console.log("Formula " +formula);
    this.result = eval(formula);
  }
 

  getAnswer() {
    this.calcAnswer();
    this.input = this.result;
    if (this.input=="0") this.input="";
  }

}
