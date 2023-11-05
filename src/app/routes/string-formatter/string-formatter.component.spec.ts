import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringFormatterComponent } from './string-formatter.component';

describe('StringFormatterComponent', () => {
  let component: StringFormatterComponent;
  let fixture: ComponentFixture<StringFormatterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StringFormatterComponent]
    });
    fixture = TestBed.createComponent(StringFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
