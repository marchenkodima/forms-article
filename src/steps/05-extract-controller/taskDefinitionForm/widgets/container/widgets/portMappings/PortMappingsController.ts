import { FormArray, FormControl, FormGroup } from "@/steps/05-extract-controller/form";

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
      containerPort: new FormControl(initialValues.containerPort),
      hostPort: new FormControl(initialValues.hostPort),
      protocol: new FormControl(initialValues.protocol),
    });
  }
}

export class PortMappingsController extends FormArray<PortMappingController> {
  constructor(initialValues: PortMappingsInitialValues) {
    super(initialValues.map((portMapping) => new PortMappingController(portMapping)));
  }
}