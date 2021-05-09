import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: []
})
export class CounterComponent implements OnInit {
  public form: FormGroup;
  
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
  }

  public createForm() {
    this.form = this.fb.group({
      count: new FormControl(0, Validators.required)
    });
  }

  public get count() {
    return this.form.get('count') as FormControl;
  }

  public increment() {
    if (this.count.value >= 100) {
      this.count.setValue(100);
    } else {
      this.count.setValue(this.count.value + 1);
    }
  }

  public decrement() {
    if (this.count.value <= 0) {
      this.count.setValue(0);
    } else {
      this.count.setValue(this.count.value - 1);
    }
  }

  public reset() {
    this.count.setValue(0);
  }
}
