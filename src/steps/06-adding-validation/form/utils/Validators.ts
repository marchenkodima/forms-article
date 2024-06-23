import { ValidatorFunction } from './types';

export class Validators {
  public static required: ValidatorFunction = (control) => {
    return typeof control.value === 'undefined' || control.value === null || control.value === ''
      ? `${control.name} is required`
      : true;
  };

  public static minLength(minLength: number): ValidatorFunction {
    return (control) => {
      if (typeof control.value === 'string') {
        return control.value.length >= minLength
          ? true
          : `${control.name} should have at least ${minLength} characters`;
      }
      if (Array.isArray(control.value)) {
        return control.value.length >= minLength
          ? true
          : `${control.name} should have at least ${minLength} items`;
      }
      return 'Invalid value. Expected string or array, received ' + typeof control.value;
    };
  }

  public static string: ValidatorFunction = (control) => {
    return typeof control.value === 'string' ? true : `${control.name} should be a string`;
  };

  public static number: ValidatorFunction = (control) => {
    return typeof control.value === 'number' ? true : `${control.name} should be a number`;
  };

  public static boolean: ValidatorFunction = (control) => {
    return typeof control.value === 'boolean' ? true : `${control.name} should be a boolean`;
  };
}
