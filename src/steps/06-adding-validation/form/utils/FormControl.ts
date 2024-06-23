import { makeObservable, observable } from 'mobx';

import { AbstractControl } from "./AbstractControl";
import { FormControlOptions, ValidatorFunction } from './types';

export class FormControl<TValue> extends AbstractControl {
  private _value: TValue;
  protected validators: ValidatorFunction<FormControl<TValue>>[] = [];

  constructor(initialValue: TValue, options?: FormControlOptions) {
    super(options);
    this._value = initialValue;
    this.validators = options?.validators || [];
    makeObservable<FormControl<TValue>, '_value'>(this, {
      _value: observable,
    });
  }

  set value(value: TValue) {
    this._value = value;
  }

  get value(): TValue {
    return this._value;
  }

  validate(): boolean {
    this.errors = this.validators
      .map((validator) => validator(this))
      .filter((error): error is string => typeof error === 'string')
      .map((message) => ({ message }));
    return this.isValid;
  }

  addValidator(validator: ValidatorFunction<FormControl<TValue>>): void {
    this.validators.push(validator);
  }
}