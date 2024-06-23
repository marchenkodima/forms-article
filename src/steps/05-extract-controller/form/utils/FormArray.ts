import { makeObservable, observable } from 'mobx';

import { AbstractControl } from "./AbstractControl";

export class FormArray<TControl extends AbstractControl> extends AbstractControl {
  controls: TControl[];

  constructor(controls: TControl[]) {
    super();
    this.controls = controls;
    makeObservable(this, {
      controls: observable,
    });
  }
}