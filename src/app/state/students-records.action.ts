import { createAction, props } from '@ngrx/store';
import { StudentsRecords } from './students-records';

export const actionList = {
  callStudentsRecordersApi:
    '[ Students Table Component ] Call students records api',
  callStudentsRecordersSuccess:
    '[ Students Table Component ] Call students records api success',
};

export const callStudentsRecordersApi = createAction(
  actionList.callStudentsRecordersApi
);
export const callStudentsRecordersApiSuccess = createAction(
  actionList.callStudentsRecordersSuccess,
  props<{ payload: StudentsRecords[] }>()
);
