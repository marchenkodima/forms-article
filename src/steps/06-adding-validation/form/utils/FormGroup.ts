import { makeObservable, observable } from 'mobx';

import { AbstractControl } from "./AbstractControl";
import { AbstractControlValue, FormControlOptions, ValidatorFunction } from './types';

type FormGroupValue<T extends {
  [K in keyof T]?: AbstractControl;
}> = {
  [K in keyof T]: AbstractControlValue<T[K]>;
};

export class FormGroup<TControl extends {
  [K in keyof TControl]: AbstractControl;
}> extends AbstractControl {
  controls: TControl;
  protected validators: ValidatorFunction<FormGroup<TControl>>[] = [];

  constructor(controls: TControl, options?: FormControlOptions) {
    super(options);
    this.controls = controls;
    this.validators = options?.validators || [];
    makeObservable(this, {
      controls: observable,
    });
  }

  get value(): FormGroupValue<TControl> {
    return Object.keys(this.controls).reduce((acc, key) => {
      acc[key as keyof TControl] = this.controls[key as keyof TControl].value;
      return acc;
    }, {} as FormGroupValue<TControl>);
  }

  override get isValid(): boolean {
    return super.isValid && !Object.values<AbstractControl>(this.controls).some((control) => !control.isValid);
  }

  validate(): boolean {
    this.errors = this.validators
      .map((validator) => validator(this))
      .filter((error): error is string => typeof error === 'string')
      .map((message) => ({ message }));
    Object.values<AbstractControl>(this.controls).forEach((control) => control.validate());
    return this.isValid;
  }

  addValidator(validator: ValidatorFunction<FormGroup<TControl>>): void {
    this.validators.push(validator);
  }
}
