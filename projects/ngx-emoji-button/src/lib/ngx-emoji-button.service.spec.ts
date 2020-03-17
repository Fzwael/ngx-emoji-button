import { TestBed } from '@angular/core/testing';

import { NgxEmojiButtonService } from './ngx-emoji-button.service';

describe('NgxEmojiButtonService', () => {
  let service: NgxEmojiButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxEmojiButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
