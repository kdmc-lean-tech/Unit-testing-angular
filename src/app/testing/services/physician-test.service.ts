import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Physician } from "../../models/physician.model";
import { PhysiciansService } from "../../services/physicians.service";
import { asyncData } from '../helpers/async-observable-helpers';
import {
  getPhysiciansMock,
  createPhysicianMock,
  deletePhysicianMock
} from './physician-test.service.response';

@Injectable()
export class PhysicianTestService extends PhysiciansService {
  constructor() {
    super(null);
  }

  public getPhysicians(): Observable<Physician[]> {
    return asyncData(getPhysiciansMock());
  }

  public createPhysician(physician: Physician): Observable<{ message: string, physician: Physician }> {
    return asyncData(createPhysicianMock(physician));
  }

  public deletePhysician(physicianId: string): Observable<{ message: string, physician: Physician }> {
    return asyncData(deletePhysicianMock(physicianId));
  }
}
