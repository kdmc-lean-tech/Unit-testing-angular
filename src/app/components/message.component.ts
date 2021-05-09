import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-message',
  template: `<h3>{{ message }}</h3>`
})
export class MessageComponent {
  @Input() message = 'Hello World';
  constructor() {
  }
}
