import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://employeejsonserver-eyf8.onrender.com';

  constructor(private http: HttpClient) {}

 
  getItems(endpoint: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${endpoint}`);
  }


  getItemById(endpoint: string, id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${endpoint}/${id}`);
  }


  addItem(endpoint: string, data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${endpoint}`, data);
  }


  updateItem(endpoint: string, id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${endpoint}/${id}`, data);
  }

  
  deleteItem(endpoint: string, id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${endpoint}/${id}`);
  }
}
