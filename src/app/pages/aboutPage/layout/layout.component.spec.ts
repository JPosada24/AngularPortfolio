import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPageLayoutComponent } from './layout.component';

describe('AboutPageLayoutComponent', () => {
  let component: AboutPageLayoutComponent;
  let fixture: ComponentFixture<AboutPageLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPageLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
