import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoStatsComponent } from './video-stats.component.ts';

describe('VideoStatsComponent', () => {
  let component: VideoStatsComponent;
  let fixture: ComponentFixture<VideoStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
