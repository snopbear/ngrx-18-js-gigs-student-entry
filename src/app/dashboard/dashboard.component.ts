import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { StudentTableComponent } from '../student-table/student-table.component';
// import { StudentRecordsComponent } from '../student-records/student-records.component';
// import { ContactUsComponent } from '../contact-us/contact-us.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatTabsModule,
    StudentTableComponent,
    // StudentRecordsComponent,
    // ContactUsComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
