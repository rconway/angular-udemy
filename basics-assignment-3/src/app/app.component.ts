import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayDetails = true;
  log = [];

  toggleDisplayDetails() {
    this.displayDetails = !this.displayDetails;
    let logEntry = {
      id: this.log.length,
      timestamp: Date.now()
    }
    this.log.push(logEntry);
  }
}
