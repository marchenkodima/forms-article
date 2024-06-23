import { Select } from "@/steps/06-adding-validation/form";
import { InfrastructureRequirementsController } from "./InfrastructureRequirementsController";

type Props = {
  formController: InfrastructureRequirementsController;
}

export const InfrastructureRequirementsForm = ({ formController }: Props) => {
  return (
    <fieldset>
      <Select control={formController.controls.taskSize.controls.cpu}>
        <option value=""></option>
        <option value="0.25">0.25</option>
        <option value="0.5">0.5</option>
        <option value="1">1</option>
      </Select>
      <Select control={formController.controls.taskSize.controls.memory}>
        <option value=""></option>
        <option value="512">512</option>
        <option value="1024">1024</option>
        <option value="2048">2048</option>
      </Select>
    </fieldset>
  );
};