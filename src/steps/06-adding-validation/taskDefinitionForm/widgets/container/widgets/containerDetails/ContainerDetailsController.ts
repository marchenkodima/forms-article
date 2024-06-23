import { FormControl, FormGroup, Validators } from "@/steps/06-adding-validation/form";

export type ContainerDetailsInitialValues = {
  containerName: string;
};

export class ContainerDetailsController extends FormGroup<{
  containerName: FormControl<string>;
}> {
  constructor(initialValues: ContainerDetailsInitialValues) {
    super({
      containerName: new FormControl(initialValues.containerName, {
        validators: [Validators.required, Validators.string],
      }),
    });
  }
}