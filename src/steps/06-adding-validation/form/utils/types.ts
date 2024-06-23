import { AbstractControl } from './AbstractControl';

export type ValidatorFunction<TControl extends AbstractControl = AbstractControl>
  = (control: TControl) => true | string;

export type FormControlOptions = {
  controlName?: string;
  validators?: ValidatorFunction[];
};

export type AbstractControlValue<T extends AbstractControl | undefined> = T extends AbstractControl<any>
  ? T['value']
  : never;

export type ValidationError = {
  message: string;
};