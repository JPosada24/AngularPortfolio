import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioPageLayoutComponent } from './layout.component';

describe('PortfolioPageLayoutComponent', () => {
  let component: PortfolioPageLayoutComponent;
  let fixture: ComponentFixture<PortfolioPageLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioPageLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
