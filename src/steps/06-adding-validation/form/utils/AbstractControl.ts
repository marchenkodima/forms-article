import { action, computed, makeObservable, observable } from "mobx";
import { FormControlOptions, ValidationError } from "./types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export abstract class AbstractControl<TValue = any> {
  public touched: boolean;
  public errors: ValidationError[];
  public name: string;

  constructor(
    options?: FormControlOptions,
  ) {
    this.touched = false;
    this.errors = [];
    this.name = options?.controlName || 'Field';
    makeObservable<AbstractControl>(this, {
      touched: observable,
      errors: observable,
      markAsTouched: action,
      isValid: computed,
    });
  }

  abstract get value(): TValue;

  abstract validate(): boolean;

  public markAsTouched(): void {
    this.touched = true;
  }

  public markAsUntouched(): void {
    this.touched = false;
  }

  public get isValid(): boolean {
    return !this.errors.length;
  }
}