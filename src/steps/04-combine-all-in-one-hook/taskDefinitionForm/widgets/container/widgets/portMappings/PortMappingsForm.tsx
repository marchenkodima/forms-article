import { set } from "lodash";

import { Form } from "@/utils/useForm";
import { TaskDefinitionInitialValues } from "@/steps/04-combine-all-in-one-hook/taskDefinitionForm/types";

type Props = {
  form: Form<TaskDefinitionInitialValues>;
  containerIndex: number;
}

export const PortMappingsForm = ({ form, containerIndex }: Props) => {
  const addPort = () => {
    form.setValues((prev) => {
      return set(
        prev,
        `containers.${containerIndex}.portMappings.${prev.containers[containerIndex].portMappings.length}`,
        { containerPort: '', hostPort: '', protocol: '' },
      );
    });
  }

  const removePort = (index: number) => {
    form.setValues((prev) => {
      return set(
        prev,
        `containers.${containerIndex}.portMappings`,
        prev.containers[containerIndex].portMappings.filter((_, i) => i !== index),
      );
    });
  }

  return (
    <fieldset>
      {form.values.containers[containerIndex].portMappings.map((_, index) => (
        <div key={index}>
          <input {...form.register(`containers.${containerIndex}.portMappings.${index}.containerPort`)} />
          <input {...form.register(`containers.${containerIndex}.portMappings.${index}.hostPort`)} />
          <input {...form.register(`containers.${containerIndex}.portMappings.${index}.protocol`)} />
          <button type="button" onClick={() => removePort(index)}>Remove port</button>
        </div>
      ))}
      <button type="button" onClick={addPort}>
        Add port
      </button>
    </fieldset>
  );
};