import { FormBuilder } from '@angular/forms';
import { RegisterForm } from '../../classes/form.class';

describe('Register Form Test', () => {
  let registerForm = new RegisterForm(new FormBuilder());

  beforeEach(() => {
    registerForm = new RegisterForm(new FormBuilder());
  });

  it('should create the form', () => {
    const { form } = registerForm;
    expect(form.contains('name')).toBeTruthy();
    expect(form.contains('password')).toBeTruthy();
    expect(form.contains('email')).toBeTruthy();
  });

  it('should be true when length is minimun 3', () => {
    const { form } = registerForm;
    const nameControl = form.get('name');
    nameControl.setValue('kev');
    expect(nameControl.valid).toBeTruthy();
  });

  it('should be false when length is less than 3', () => {
    const { form } = registerForm;
    const nameControl = form.get('name');
    nameControl.setValue('k');
    expect(nameControl.valid).toBeFalsy();
  });

  it('should be a email valid when user writes test@gmail.com', () => {
    const { form } = registerForm;
    const emailControl = form.get('email');
    emailControl.setValue('test@gmail.com');
    expect(emailControl.valid).toBeTruthy();
  });

  it('should be a email invalid when user writes test@gmail.', () => {
    const { form } = registerForm;
    const emailControl = form.get('email');
    emailControl.setValue('test@gmail.');
    expect(emailControl.valid).toBeFalsy();
  });

  it('should be a email invalid when user writes test@gmail', () => {
    const { form } = registerForm;
    const emailControl = form.get('email');
    emailControl.setValue('test@gmail');
    expect(emailControl.valid).toBeFalsy();
  });

  it('should be a password invalid when length is less than 8', () => {
    const { form } = registerForm;
    const passwordControl = form.get('password');
    passwordControl.setValue('1234567');
    expect(passwordControl.valid).toBeFalsy();
  });

  it('should be a password valid when length is higher than 8', () => {
    const { form } = registerForm;
    const passwordControl = form.get('password');
    passwordControl.setValue('12345678');
    expect(passwordControl.valid).toBeTruthy();
  });
});
