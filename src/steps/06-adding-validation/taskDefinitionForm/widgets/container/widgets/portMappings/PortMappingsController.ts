import { FormArray, FormControl, FormGroup, Validators } from "@/steps/06-adding-validation/form";

export type PortMappingInitialValues = {
  containerPort: number;
  hostPort: number;
  protocol: string;
};

export type PortMappingsInitialValues = PortMappingInitialValues[];

export class PortMappingController extends FormGroup<{
  containerPort: FormControl<number>;
  hostPort: FormControl<number>;
  protocol: FormControl<string>;
}> {
  constructor(initialValues: PortMappingInitialValues) {
    super({
      containerPort: new FormControl(initialValues.containerPort, {
        validators: [Validators.required, Validators.number],
      }),
      hostPort: new FormControl(initialValues.hostPort, {
        validators: [Validators.required, Validators.number],
      }),
      protocol: new FormControl(initialValues.protocol, {
        validators: [Validators.required, Validators.string],
      }),
    });
  }
}

export class PortMappingsController extends FormArray<PortMappingController> {
  constructor(initialValues: PortMappingsInitialValues) {
    super(initialValues.map((portMapping) => new PortMappingController(portMapping)));
  }
}