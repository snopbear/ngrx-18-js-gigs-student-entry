import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { StudentsRecords } from '../state/students-records';
import { AppState, selectAll } from '../state/students.selectors';
import * as Actions from '../state/students-records.action';
import { AsyncPipe, JsonPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss'],
  standalone: true,
  imports: [MatTableModule, AsyncPipe, NgFor,JsonPipe],
})
export class StudentTableComponent implements OnInit {
  dataSource: any = [];
  dataSource$: Observable<any> = this.store.select(selectAll);

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

  constructor(private store: Store<AppState>) {
    this.store.dispatch(Actions.callStudentsRecordsApi());
  }

  ngOnInit() {}
}
