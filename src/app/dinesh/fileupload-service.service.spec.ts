import { TestBed } from '@angular/core/testing';

import { FileuploadServiceService } from './fileupload-service.service';

describe('FileuploadServiceService', () => {
  let service: FileuploadServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileuploadServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
