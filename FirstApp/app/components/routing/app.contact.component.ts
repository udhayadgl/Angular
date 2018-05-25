import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact-component",
  template: `
    <h2>Contact Component</h2>
    <div>{{message}}</div>
    <hr>
    <a [routerLink]="['employee']">Employee</a>
    <br>
    <router-outlet></router-outlet>
    `
})
export class ContactComponent implements OnInit {
  message: string;

  constructor() {
    this.message = "This is Contact component!!";
  }

  ngOnInit() {}
}
