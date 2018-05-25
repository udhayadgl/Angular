import { Component, ViewChild, AfterViewInit } from "@angular/core";
import { ChildComponent } from "./app.child.component";

@Component({
  selector: "app-parent",
  template: `
    Message: {{message}}
    <app-child></app-child>
  `
})
export class ParentComponent implements AfterViewInit {

  //@ViewChild: ViewChild allows a one component to be injected into another, 
  //giving the parent access to its attributes and functions. 
  //One caveat, however, is that child won’t be available until after the view has been initialized. 
  //This means we need to implement the AfterViewInit lifecycle hook to receive the data from the child.
  @ViewChild(ChildComponent) child: ChildComponent;

  constructor() {}

  message: string;

  ngAfterViewInit() {
    this.message = this.child.message;
  }
}
