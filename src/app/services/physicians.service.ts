import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Physician } from '../models/physician.model';

@Injectable({
  providedIn: 'root'
})
export class PhysiciansService {
  constructor(private http: HttpClient) {
  }

  public getPhysicians(): Observable<Physician[]> {
    return this.http.get<any[]>('.....');
  }

  public createPhysician(physician): Observable<{ message: string, physician: Physician }> {
    return this.http.post<any>('....', physician);
  }

  public deletePhysician(physicianId: string): Observable<{ message: string, physician: Physician }> {
    return this.http.delete<any>(`...../${ physicianId }`);
  }
}
