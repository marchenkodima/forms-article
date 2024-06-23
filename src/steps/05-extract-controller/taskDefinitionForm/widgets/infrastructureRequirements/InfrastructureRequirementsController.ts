import { FormControl, FormGroup } from "@/steps/05-extract-controller/form";

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
  }
}