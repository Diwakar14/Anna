import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XmlObjectComponent } from './xml-object.component';

describe('XmlObjectComponent', () => {
  let component: XmlObjectComponent;
  let fixture: ComponentFixture<XmlObjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XmlObjectComponent]
    });
    fixture = TestBed.createComponent(XmlObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
