import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { provideHttpClient } from '@angular/common/http';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, EmployeeListComponent]
})


export class AppComponent {
  title = 'frontend';
}
