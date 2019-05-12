import { Component } from '@angular/core';

@Component({
    selector: "app-server",
    //selector: "[app-server]",
    //selector: ".app-server",
    templateUrl: "./server.component.html",
    styles: [`
        h5 {
            color: red;
        }
    `]
})
export class ServerComponent {
    fred = "bob";
}