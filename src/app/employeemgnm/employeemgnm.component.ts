import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employeemgnm',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './employeemgnm.component.html',
  styleUrl: './employeemgnm.component.css'
})
export class EmployeemgnmComponent {
  employees: any[] = [];
  employee: any = { name: '', age: '', status: 'active', email: '' };
  isEdit: boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.apiService.getItems('employees').subscribe((data) => {
      this.employees = data;
    });
  }

  saveEmployee(): void {
    if (this.isEdit) {
      this.apiService.updateItem('employees', this.employee.id, this.employee).subscribe(() => {
        this.loadEmployees();
        this.resetForm();
      });
    } else {
      this.apiService.addItem('employees', this.employee).subscribe(() => {
        this.loadEmployees();
        this.resetForm();
      });
    }
  }

  editEmployee(employee: any): void {
    this.employee = { ...employee };
    this.isEdit = true;
  }

  deleteEmployee(id: number): void {
    this.apiService.deleteItem('employees', id).subscribe(() => {
      this.loadEmployees();
    });
  }

  resetForm(): void {
    this.employee = { name: '', age: '', status: 'active', email: '' };
    this.isEdit = false;
  }

}
