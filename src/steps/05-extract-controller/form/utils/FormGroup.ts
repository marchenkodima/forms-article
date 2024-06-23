import { makeObservable, observable } from 'mobx';

import { AbstractControl } from "./AbstractControl";

export class FormGroup<TControl extends {
  [K in keyof TControl]: AbstractControl;
}> extends AbstractControl {
  controls: TControl;

  constructor(controls: TControl) {
    super();
    this.controls = controls;
    makeObservable(this, {
      controls: observable,
    });
  }
}
