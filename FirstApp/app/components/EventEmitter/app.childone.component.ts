import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-childone",
  templateUrl: "./app.childone.view.html"
})
export class AppChildOneComponent {
  @Output() valueChangeOP = new EventEmitter();
  counter = 0;

  constructor() {}

  ngOnInit() {}

  handleClick() {
    console.log("Hey I'm clicked!!");
  }

  valueChanged() {
    this.counter = this.counter + 1;
    this.valueChangeOP.emit(this.counter);
  }
}
