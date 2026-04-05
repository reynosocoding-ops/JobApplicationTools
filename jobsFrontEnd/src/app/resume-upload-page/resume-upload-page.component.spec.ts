import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeUploadPageComponent } from './resume-upload-page.component';

describe('ResumeUploadPageComponent', () => {
  let component: ResumeUploadPageComponent;
  let fixture: ComponentFixture<ResumeUploadPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeUploadPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumeUploadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
