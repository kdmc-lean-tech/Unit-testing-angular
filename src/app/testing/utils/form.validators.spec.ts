import { FormControl } from '@angular/forms';
import { emailValidator } from '../../utils/form.validtors';

describe('Form Validators Test', () => {
  it('should return null if control is valid', () => {
    const emailControl = new FormControl('test@gmail.com');
    expect(emailValidator(emailControl)).toBeNull();
  });

  it('should return a message error if control is invalid', () => {
    const emailControl = new FormControl('test@');
    expect(emailValidator(emailControl)).toEqual({
      email: { message: `${emailControl.value} is not a valid email` }
    });
  });
});
