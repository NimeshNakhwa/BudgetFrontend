import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetAllocatedComponent } from './budget-allocated.component';

describe('BudgetAllocatedComponent', () => {
  let component: BudgetAllocatedComponent;
  let fixture: ComponentFixture<BudgetAllocatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BudgetAllocatedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetAllocatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
