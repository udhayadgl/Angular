import { Component} from '@angular/core';

@Component({
  selector: 'app-child',
  template:`Hi, child component!!!`,
})
export class ChildComponent {

  message: string = "Hello Udhaya!"

  constructor() { }

}