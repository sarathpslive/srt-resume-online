import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeHomePageComponent } from './resume-home-page.component';

describe('ResumeHomePageComponent', () => {
  let component: ResumeHomePageComponent;
  let fixture: ComponentFixture<ResumeHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
