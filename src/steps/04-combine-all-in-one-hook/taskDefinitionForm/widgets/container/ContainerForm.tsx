import { Form } from "@/utils/useForm";
import { TaskDefinitionInitialValues } from "@/steps/04-combine-all-in-one-hook/taskDefinitionForm/types";

import { ContainerDetailsForm } from "./widgets/containerDetails";
import { PortMappingsForm } from "./widgets/portMappings";

type Props = {
  form: Form<TaskDefinitionInitialValues>;
  containerIndex: number;
}

export const ContainerForm = ({ form, containerIndex }: Props) => {
  return (
    <fieldset>
      <ContainerDetailsForm form={form} />
      <PortMappingsForm form={form} containerIndex={containerIndex} />
    </fieldset>
  );
};