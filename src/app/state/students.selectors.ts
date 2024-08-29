import { createSelector } from '@ngrx/store';

import { StudentsRecords } from './students-records';

export interface AppState{
     studentRecords: StudentsRecords[];
}

export const selectFeature= (state: AppState) => state.studentRecords;
export const selectAll=createSelector(selectFeature,(state: StudentsRecords[]) => state);