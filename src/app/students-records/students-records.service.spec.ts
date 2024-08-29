/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StudentsRecordsService } from './students-records.service';

describe('Service: StudentsRecords', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentsRecordsService]
    });
  });

  it('should ...', inject([StudentsRecordsService], (service: StudentsRecordsService) => {
    expect(service).toBeTruthy();
  }));
});
