import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { StudentsRecords } from '../state/students-records';
import { AppState, selectAll } from '../state/students.selectors';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss'],
  standalone: true,
  imports: [MatTableModule],
})
export class StudentTableComponent implements OnInit {
  dataSource: any = [];
  dataSource$: Observable<StudentsRecords[]> = this.store.select(selectAll);
  displayColumns: string[] = [
    'name',
    'city',
    'country',
    'subject',
    'passportDeclaration',
    'fitnessDeclaration',
    'courseName',
    'date',
    'state',
    'street',
    'email',
    'phone',
    'postalCode',
  ];

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.dataSource$.subscribe((data) => (this.dataSource = data));
  }
}
