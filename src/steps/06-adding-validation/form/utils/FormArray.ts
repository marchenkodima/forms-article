import { makeObservable, observable } from 'mobx';

import { AbstractControl } from "./AbstractControl";
import { AbstractControlValue, FormControlOptions, ValidatorFunction } from './types';

type FormArrayValue<T extends AbstractControl> = AbstractControlValue<T>[];

export class FormArray<TControl extends AbstractControl> extends AbstractControl {
  controls: TControl[];
  protected validators: ValidatorFunction<FormArray<TControl>>[] = [];

  constructor(controls: TControl[], options?: FormControlOptions) {
    super(options);
    this.controls = controls;
    this.validators = options?.validators || [];
    makeObservable(this, {
      controls: observable,
    });
  }

  get value(): FormArrayValue<TControl> {
    return this.controls.map((control) => control.value);
  }

  override get isValid(): boolean {
    return super.isValid && !this.controls.some((control) => !control.isValid);
  }

  validate(): boolean {
    this.errors = this.validators
      .map((validator) => validator(this))
      .filter((error): error is string => typeof error === 'string')
      .map((message) => ({ message }));
    this.controls.forEach((control) => control.validate());
    return this.isValid;
  }

  addValidator(validator: ValidatorFunction<FormArray<TControl>>): void {
    this.validators.push(validator);
  }
}