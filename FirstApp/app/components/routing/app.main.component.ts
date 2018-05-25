import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main-component",
  template: `
    <h1>Main Component - The Angular Routing</h1>
    <table class="table table-boardered">
        <tr>
            <td>
                <a [routerLink] = "['home']">Home</a>
            </td>
            <td>
                <a [routerLink] = "['about']">About</a>
            </td>
            <td>
                <a [routerLink] = "['contact']">Contact</a>
            </td>
        </tr>
    </table>
    <hr>
    <router-outlet></router-outlet>
    `
})
export class MainComponent implements OnInit {
  message: string;

  constructor() {
    this.message = "This is Main component!!";
  }

  ngOnInit() {}
}
