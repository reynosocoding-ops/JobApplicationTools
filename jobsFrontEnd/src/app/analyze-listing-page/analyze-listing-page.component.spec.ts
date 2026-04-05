import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzeListingPageComponent } from './analyze-listing-page.component';

describe('AnalyzeListingPageComponent', () => {
  let component: AnalyzeListingPageComponent;
  let fixture: ComponentFixture<AnalyzeListingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyzeListingPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalyzeListingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
