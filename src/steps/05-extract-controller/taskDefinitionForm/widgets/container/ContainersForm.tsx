import { observer } from "mobx-react";
import { ContainerController, ContainersController } from "./ContainersController";
import { ContainerDetailsForm } from "./widgets/containerDetails";
import { PortMappingsForm } from "./widgets/portMappings";

type Props = {
  formController: ContainersController;
}

export const ContainersForm = observer(({ formController }: Props) => {
  const addContainer = () => {
    formController.controls.push(new ContainerController({
      containerDetails: {
        containerName: "",
      },
      portMappings: [],
    }));
  };

  const removeContainer = (index: number) => {
    formController.controls.splice(index, 1);
  };

  return (
    <>
      {formController.controls.map((containerController, idx) => (  
        <fieldset>
          <ContainerDetailsForm formController={containerController.controls.containerDetails} />
          <PortMappingsForm formController={containerController.controls.portMappings} />
          <button type="button" onClick={() => removeContainer(idx)}>Remove container</button>
        </fieldset>
      ))}
      <button type="button" onClick={addContainer}>Add container</button>
    </>
  );
});