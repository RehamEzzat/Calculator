import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  buttonClicked: any = false;
  firstOperand: number = 0;
  secondOperand: number = 0;

  addition: any = null;
  subtraction: any = null;
  multiplication: any = null;

constructor(private _http: Http) {

}

getInfo(){
  // get addition result

  this._http.get('http://localhost:8080/SunRESTFUL/calculator/addition?firstOperand='+this.firstOperand+'&secondOperand='+this.secondOperand)
  .map((res: Response) => res.json())
   .subscribe(data => {
          this.addition = data;
          console.log(this.addition);
    });

  // get multiplication result

  this._http.get('http://localhost:8080/SunRESTFUL/calculator/multiply/'+this.firstOperand+'/'+this.secondOperand)
  .map((res: Response) => res.json())
   .subscribe(data => {
          this.multiplication = data;
          console.log(this.multiplication);
    });

    // get subtraction result

    /*this._http.post('http://localhost:8080/SunRESTFUL/calculator/subtraction?firstOperand='+this.firstOperand+'&secondOperand='+this.secondOperand)
    .map((res: Response) => res.json())
     .subscribe(data => {
            this.subtraction = data;
            console.log(this.subtraction);
      });*/

  this.buttonClicked = true;
  }
}
