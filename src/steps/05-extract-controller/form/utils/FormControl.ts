import { makeObservable, observable } from 'mobx';

import { AbstractControl } from "./AbstractControl";

export class FormControl<TValue> extends AbstractControl {
  value: TValue;

  constructor(initialValue: TValue) {
    super();
    this.value = initialValue;
    makeObservable(this, {
      value: observable,
    });
  }
}