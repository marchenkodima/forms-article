import { observer } from "mobx-react";
import { Input } from "@/steps/05-extract-controller/form/components/Input";
import { ContainerDetailsController } from "./ContainerDetailsController";

type Props = {
  formController: ContainerDetailsController;
}

// actually this component may not be wrapped with observer
// because it doesn't directly read or write any observable values
export const ContainerDetailsForm = observer(({ formController }: Props) => {
  return (
    <fieldset>
      <Input control={formController.controls.containerName} />
    </fieldset>
  );
});