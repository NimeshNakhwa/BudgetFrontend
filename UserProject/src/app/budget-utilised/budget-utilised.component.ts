import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BudgetService } from '../services/budget.service';

@Component({
  standalone: true,
  selector: 'app-budget-utilised',
  templateUrl: './budget-utilised.component.html',
  styleUrls: ['./budget-utilised.component.css'],
  imports: [CommonModule, FormsModule]
})
export class BudgetUtilisedComponent implements OnInit {
  rawBudgets: any[] = []; // To store the raw response data
  isEditPopupOpen: boolean = false; // To control the popup visibility
  editBudget: any = null; // Budget being edited

  constructor(private budgetService: BudgetService) {}

  ngOnInit() {
    this.fetchUtilizedBudgets();
  }

  fetchUtilizedBudgets() {
    this.budgetService.getAllBudgets().subscribe({
      next: (response) => {
        console.log('Fetched utilized budgets:', response);
        this.rawBudgets = response; // Store the raw response data
      },
      error: (error) => {
        console.error('Error fetching utilized budgets:', error);
        alert('Failed to fetch utilized budgets. Please try again.');
      }
    });
  }

  openEditPopup(budget: any) {
    this.editBudget = { ...budget }; // Clone the budget to edit
    this.isEditPopupOpen = true; // Open the popup
  }

  closeEditPopup() {
    this.isEditPopupOpen = false; // Close the popup
    this.editBudget = null; // Clear the edit data
  }

  saveEdit() {
    this.budgetService.updateBudget(this.editBudget.budgetId, this.editBudget).subscribe({
      next: (updatedBudget) => {
        console.log(`Budget with ID ${updatedBudget.budgetId} updated successfully.`);
        const index = this.rawBudgets.findIndex(b => b.budgetId === updatedBudget.budgetId);
        if (index !== -1) {
          this.rawBudgets[index] = updatedBudget; // Update the budget in the list
        }
        this.closeEditPopup(); // Close the popup
      },
      error: (error) => {
        console.error('Error updating budget:', error);
        alert('Failed to update the budget. Please try again.');
      }
    });
  }

  deleteBudget(budgetId: number) {
    if (confirm('Are you sure you want to delete this budget?')) {
      this.budgetService.deleteBudget(budgetId).subscribe({
        next: () => {
          console.log(`Budget with ID ${budgetId} deleted successfully.`);
          this.rawBudgets = this.rawBudgets.filter(budget => budget.budgetId !== budgetId); // Remove from the frontend list
        },
        error: (error) => {
          console.error('Error deleting budget:', error);
          alert('Failed to delete the budget. Please try again.');
        }
      });
    }
  }
}