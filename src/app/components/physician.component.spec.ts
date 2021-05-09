import { async, ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing";
import { PhysiciansService } from "../services/physicians.service";
import { PhysicianTestService } from "../testing/services/physician-test.service";
import { PhysicianComponent } from "./physician.component";
import { Physician } from '../models/physician.model';

describe('PhysicianComponent', () => {

  let component: PhysicianComponent;
  let fixture: ComponentFixture<PhysicianComponent>;
  let physicianService: PhysiciansService;
  const newPhysician: Physician = {
    _id: '10',
    name: 'Natalia Bedoya',
    email: 'natalia@gmail.com',
    avatar: null,
    phone: '(420) 444-564',
    createdAt: new Date(),
    updatedAt: new Date(),
    active: true
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PhysicianComponent
      ],
      providers: [
        { provide: PhysiciansService, useClass: PhysicianTestService }
      ]
    });
    fixture = TestBed.createComponent(PhysicianComponent);
    component = fixture.componentInstance;
    physicianService = TestBed.inject(PhysiciansService);
    fixture.detectChanges();
  }));

  it('should create physician component', () => {
    expect(component).toBeTruthy();
  });

  it('should call getPhysicians', () => {
    spyOn(physicianService, 'getPhysicians').and.callThrough();
    component.getPhysicians();
    expect(component.physicians.length).toBeGreaterThan(0);
  });

  it('should call createPhysician with new physician', fakeAsync(() => {
    const physicianServiceSpy = spyOn(physicianService, 'createPhysician').and.callThrough();
    component.createPhysicians(newPhysician);
    tick();
    expect(physicianServiceSpy).toHaveBeenCalledWith(newPhysician);
  }));

  it('should include newPhysician in physicians', fakeAsync(() => {
    spyOn(physicianService, 'createPhysician').and.callThrough();
    component.createPhysicians(newPhysician);
    tick();
    expect(component.physicians.includes(newPhysician)).toBeTruthy();
  }));

  it('should show alert', fakeAsync(() => {
    spyOn(window, 'alert');
    spyOn(physicianService, 'createPhysician').and.callThrough();
    component.createPhysicians(newPhysician);
    tick();
    expect(window.alert).toHaveBeenCalledWith(`Physician ${ newPhysician.name } created succesfully`);
  }));

  it('should not remove the physician when user dont confirm', fakeAsync(() => {
    spyOn(window, 'confirm').and.returnValue(false);
    spyOn(physicianService, 'deletePhysician').and.callThrough();
    component.deletePhysiciansById('2');
    tick();
    expect(component.physicians.length).toBe(3);
  }));

  it('should remove the physician when user confirm', fakeAsync(() => {
    spyOn(window, 'confirm').and.returnValue(true);
    spyOn(physicianService, 'deletePhysician').and.callThrough();
    component.deletePhysiciansById('2');
    tick();
    expect(component.physicians.length).toBe(2);
  }));
});
