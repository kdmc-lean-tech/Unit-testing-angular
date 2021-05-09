import { Component } from "@angular/core";
import { PhysiciansService } from '../services/physicians.service';
import { Physician } from '../models/physician.model';

@Component({
  selector: 'app-physician',
  template: `<p>physician works!!</p>`,
  styleUrls: []
})
export class PhysicianComponent {
  public physicians: Physician[] = [];
  constructor(private physicianService: PhysiciansService) {
    this.getPhysicians();
  }

  public getPhysicians() {
    this.physicianService.getPhysicians()
      .subscribe(physicians => this.physicians = physicians);
  }

  public createPhysicians(newPhysician: Physician) {
    this.physicianService.createPhysician(newPhysician)
      .subscribe(({ message, physician }) => {
        this.physicians.push(physician);
        alert(message);
      });
  }

  public deletePhysiciansById(physicianId: string) {
    const comfirmDetelePhysician = confirm(`Are you sure you want to remove this Physician?`);
    if (comfirmDetelePhysician) {
      this.physicianService.deletePhysician(physicianId)
      .subscribe(({ message }) => {
        this.physicians = this.physicians.filter(physician => physician._id !== physicianId);
        alert(message);
      });
    }
  }
}
