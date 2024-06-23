import { FormControl, FormGroup } from "@/steps/05-extract-controller/form";

export type ContainerDetailsInitialValues = {
  containerName: string;
};

export class ContainerDetailsController extends FormGroup<{
  containerName: FormControl<string>;
}> {
  constructor(initialValues: ContainerDetailsInitialValues) {
    super({
      containerName: new FormControl(initialValues.containerName),
    });
  }
}