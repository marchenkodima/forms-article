import { FormArray, FormGroup } from "@/steps/06-adding-validation/form";
import { ContainerDetailsController, ContainerDetailsInitialValues } from "./widgets/containerDetails";
import { PortMappingsController, PortMappingsInitialValues } from "./widgets/portMappings";

export type ContainerInitialValues = {
  containerDetails: ContainerDetailsInitialValues;
  portMappings: PortMappingsInitialValues;
};
export type ContainersInitialValues = ContainerInitialValues[];

export class ContainerController extends FormGroup<{
  containerDetails: ContainerDetailsController;
  portMappings: PortMappingsController;
}> {
  constructor(initialValues: ContainerInitialValues) {
    super({
      containerDetails: new ContainerDetailsController(initialValues.containerDetails),
      portMappings: new PortMappingsController(initialValues.portMappings),
    });
  }
}

export class ContainersController extends FormArray<ContainerController> {
  constructor(initialValues: ContainersInitialValues) {
    super(initialValues.map((container) => new ContainerController(container)));
  }
}