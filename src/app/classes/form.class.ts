import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../utils/form.validtors';

export class RegisterForm {
  public form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      name: new FormControl('', [ Validators.required, Validators.minLength(3) ]),
      email: new FormControl('', [ Validators.required, emailValidator ]),
      password: new FormControl('', [ Validators.required, Validators.minLength(8) ])
    });
  }
}
