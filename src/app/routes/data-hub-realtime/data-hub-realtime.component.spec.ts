import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataHubRealtimeComponent } from './data-hub-realtime.component';

describe('DataHubRealtimeComponent', () => {
  let component: DataHubRealtimeComponent;
  let fixture: ComponentFixture<DataHubRealtimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataHubRealtimeComponent]
    });
    fixture = TestBed.createComponent(DataHubRealtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
