import { state } from '@angular/animations';
import { StudentsRecords } from './students-records';
import { createReducer, on } from '@ngrx/store';
import * as Actions from './students-records.action';
export const initState: { studentsRecords: StudentsRecords[] } = {
  studentsRecords: [

  ],
};

export const studentsReducer = createReducer(
  initState,
  on(Actions.callStudentsRecordsApiSuccess, (state, { payload }) => ({
    ...state,
    studentsRecords: payload,
  }))
);
