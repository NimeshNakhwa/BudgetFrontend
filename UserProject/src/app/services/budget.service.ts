import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private apiUrl = 'http://localhost:8080/api/budgets'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  createBudget(budget: { category: string; budgetAssigned: number }): Observable<any> {
    return this.http.post<any>(this.apiUrl, budget);
  }

  // Fetch all budgets
  getAllBudgets(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Fetch utilized budgets
  getUtilizedBudgets(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/utilized`);
  }

  // Delete a budget
  deleteBudget(budgetId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${budgetId}`);
  }

  // Update a budget
  updateBudget(budgetId: number, budgetDetails: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${budgetId}`, budgetDetails);
  }
}