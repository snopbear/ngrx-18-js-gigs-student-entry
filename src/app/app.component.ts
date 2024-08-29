import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentTableComponent } from "./student-table/student-table.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngrx-18-js-gigs-student-entry';
}
