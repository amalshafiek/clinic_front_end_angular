import { TestBed, inject } from '@angular/core/testing';

import { PatientsService } from './patients.service';



describe('PatientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientsService]
    });
  });

  it('should be created', inject([PatientsService], (service: PatientsService) => {
    expect(service).toBeTruthy();
  }));
});
