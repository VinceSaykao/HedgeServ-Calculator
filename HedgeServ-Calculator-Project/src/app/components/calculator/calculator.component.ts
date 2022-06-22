import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})        
export class CalculatorComponent implements OnInit {

    // input and result will be data-type strings and start as empty strings
    input:string = '';
    result:string = '';



    // property messages
    messages = this.http.get<any[]>('http://localhost:4201');
    loadedPosts = [];

  // inject http client
  constructor (private http: HttpClient) {}
  
  // get method
  get() {
    this.http.get('http://localhost:4201/calculator')
    .subscribe(next => console.log(next));
  }


  // this post method calls results and posts the result as an object
  post() {
    this.calcValue();
    this.input = this.result;
    if (this.input=="0") this.input="";

    this.http.post('http://localhost:4201/calculator', {result: this.result})
    .subscribe(next => console.log(next));
  }
  




    
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
      this.calcValue();
    } // end of writetoinput
   
    // this method will get the last input, example: 56+34 , last input is 34
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
   
   
    // this method inputs all operator clicks and expects a number after pressing operator
    pressOperator(op: string) {
   
      //Do not allow operators more than once
      const lastKey = this.input[this.input.length - 1];
      if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+')  {
        return;
      }
  
      this.input = this.input + op
      this.calcValue();
    } // end of pressOperator
  

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
      this.calcValue();
      this.input = this.result;
      if (this.input=="0") this.input="";
    }
  
  
    // where calculation is done
    // identifies the last character, if decimal or operator will remove it will be removed
    calcValue() {
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
   
  

  ngOnInit(): void {
  }

}
