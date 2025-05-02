import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BudgetService } from '../services/budget.service';

@Component({
  standalone: true,
  selector: 'app-budget-allocated',
  templateUrl: './budget-allocated.component.html',
  styleUrls: ['./budget-allocated.component.css'],
  imports: [CommonModule, FormsModule]
})
export class BudgetAllocatedComponent {
  allocatedAmount: number = 0;
  allocatedCategory: string = '';
  categories: string[] = ['CSI', 'TSDW', 'Development', 'HR'];
  showSuccess: boolean = false;

  constructor(private budgetService: BudgetService) {}

  allocateBudget() {
    if (this.allocatedCategory && this.allocatedAmount > 0) {
      // Adjust the payload to match the backend's expected format
      const payload = {
        budgetAssigned: this.allocatedAmount, // Use "amount" to match the service's expected type
        category: this.allocatedCategory
      };

      this.budgetService.createBudget(payload).subscribe({
        next: (response) => {
          console.log('Budget allocated successfully:', response);
          this.showSuccess = true;
        },
        error: (error) => {
          console.error('Error allocating budget:', error);
          alert('Failed to allocate budget. Please try again.');
        }
      });
    } else {
      alert('Please fill in all fields correctly.');
    }
  }
}