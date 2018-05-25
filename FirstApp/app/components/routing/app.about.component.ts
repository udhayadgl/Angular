import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about-component",
  template: `
    <h2>About Component</h2>
    <div>{{message}}</div>
    `
})
export class AboutComponent implements OnInit {
  message: string;

  constructor() {
    this.message = "This is About component!!";
  }

  ngOnInit() {}
}
