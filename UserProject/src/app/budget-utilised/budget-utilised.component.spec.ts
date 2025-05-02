import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BudgetUtilisedComponent } from './budget-utilised.component';
import { BudgetService } from '../services/budget.service';
import { of } from 'rxjs';

describe('BudgetUtilisedComponent', () => {
  let component: BudgetUtilisedComponent;
  let fixture: ComponentFixture<BudgetUtilisedComponent>;
  let mockBudgetService: jasmine.SpyObj<BudgetService>;

  beforeEach(async () => {
    mockBudgetService = jasmine.createSpyObj('BudgetService', ['getAllBudgets']);
    mockBudgetService.getAllBudgets.and.returnValue(of([
      { category: 'Marketing', amount: 1000 },
      { category: 'Operations', amount: 500 }
    ]));

    await TestBed.configureTestingModule({
      declarations: [BudgetUtilisedComponent],
      providers: [{ provide: BudgetService, useValue: mockBudgetService }]
    }).compileComponents();

    fixture = TestBed.createComponent(BudgetUtilisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch utilized budgets on init', () => {
    component.ngOnInit();
    expect(mockBudgetService.getAllBudgets).toHaveBeenCalled();
    expect(component.utilizedBudgets.length).toBe(2);
    expect(component.utilizedBudgets[0].category).toBe('Marketing');
  });

  it('should display budgets in the template', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const rows = compiled.querySelectorAll('tbody tr');
    expect(rows.length).toBe(2);
    expect(rows[0].textContent).toContain('Marketing');
    expect(rows[0].textContent).toContain('1000');
  });
});