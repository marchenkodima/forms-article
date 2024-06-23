import { FormControl, FormGroup, ValidatorFunction } from "@/steps/06-adding-validation/form";

export type InfrastructureRequirementsInitialValues = {
  taskSize: {
    cpu: string;
    memory: string;
  };
};

export class InfrastructureRequirementsController extends FormGroup<{
  taskSize: FormGroup<{
    cpu: FormControl<string>;
    memory: FormControl<string>;
  }>;
}> {
  constructor(initialValues: InfrastructureRequirementsInitialValues) {
    super({
      taskSize: new FormGroup({
        cpu: new FormControl(initialValues.taskSize.cpu),
        memory: new FormControl(initialValues.taskSize.memory),
      }),
    });
    this.controls.taskSize.controls.memory.addValidator(this.validateTaskSize);
  }

  private validateTaskSize: ValidatorFunction<FormControl<string>> = () => {
    const cpu = Number(this.controls.taskSize.controls.cpu.value);
    const memory = Number(this.controls.taskSize.controls.memory.value);
    if (cpu === 0.25 && memory >= 1024) {
      return 'For 0.25 CPU, memory should be less than 1024';
    }
    return true;
  }
}