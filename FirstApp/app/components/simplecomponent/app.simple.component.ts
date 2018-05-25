import { Component } from "@angular/core";
// the Expression Binding aka interpolation syntax is {{}}
// the property binding, syntax is []
// the event binding , syntac is (<Event-Name>)="method()"
@Component({
     selector:"app-simple-component",
     template:`
       <h2>My Simple Component!!!!</h2>
       <br>
       <div>{{message}}</div>
       <br>
       <input type="text" [value]="message" class="form-control">
       <a [href]="url">DNC</a>
       <br>
       <input type="button" value="Click Me!!" (click)="doWork()">
       <hr>
       <input type="text" class="form-control" [(ngModel)]="name">
       <br>
       <input type="text" class="form-control" [(ngModel)]="name">
       <br>
       <input type="text" class="form-control" [(ngModel)]="name">
     `
})
export class SimpleComponent {
    message:string;
    url:string;
    name:string;
    constructor() {
        this.message  ="I am Expression Binding";
        this.url = "http://www.dotnetcurry.com";
        this.name ="";
    }
    doWork():void {
        this.message = "I am clicked!!";
    }
}