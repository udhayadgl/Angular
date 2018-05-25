import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-parent",
  templateUrl: "./app.parent.view.html"
})
export class AppParentComponent implements OnInit {
  parentMessage: any;
  constructor() {}

  ngOnInit() {}

  displayCounter(count: any) {
    this.parentMessage = count;
    console.log(count);
  }
}
