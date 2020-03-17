import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEmojiButtonComponent } from './ngx-emoji-button.component';

describe('NgxEmojiButtonComponent', () => {
  let component: NgxEmojiButtonComponent;
  let fixture: ComponentFixture<NgxEmojiButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxEmojiButtonComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxEmojiButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
