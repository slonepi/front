import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelDashboardComponent } from './channel-dashboard.component.ts';

describe('ChannelDashboardComponent', () => {
  let component: ChannelDashboardComponent;
  let fixture: ComponentFixture<ChannelDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
