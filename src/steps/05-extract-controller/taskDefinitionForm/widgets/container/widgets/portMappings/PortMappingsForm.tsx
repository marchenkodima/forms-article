import { observer } from "mobx-react";
import { PortMappingController, PortMappingsController } from "./PortMappingsController";
import { Input, InputNumber } from "@/steps/05-extract-controller/form";

type Props = {
  formController: PortMappingsController;
}

export const PortMappingsForm = observer(({ formController }: Props) => {
  const addPort = () => {
    formController.controls.push(new PortMappingController({
      containerPort: 0,
      hostPort: 0,
      protocol: '',
    }));
  };

  const removePort = (index: number) => {
    formController.controls.splice(index, 1);
  };

  return (
    <fieldset>
      {formController.controls.map((portMapping, index) => (
        <div key={index}>
          <InputNumber control={portMapping.controls.containerPort} />
          <InputNumber control={portMapping.controls.hostPort} />
          <Input control={portMapping.controls.protocol} />
          <button type="button" onClick={() => removePort(index)}>Remove port</button>
        </div>
      ))}
      <button type="button" onClick={addPort}>
        Add port
      </button>
    </fieldset>
  );
});