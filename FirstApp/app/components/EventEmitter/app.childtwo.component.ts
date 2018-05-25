import { Component, Input, EventEmitter } from "@angular/core";

@Component({
  selector: "app-childtwo",
  templateUrl: "./app.childtwo.view.html"
})
export class AppChildTwoComponent {
  @Input() childMessage: string;

  constructor() {}

  ngOnInit() {}
}
