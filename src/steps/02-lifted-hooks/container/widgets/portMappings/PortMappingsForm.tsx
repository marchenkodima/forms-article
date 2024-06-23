import { Form } from "@/utils/useForm";

import { PortMappingsInitialValues } from "./types";

type Props = {
  form: Form<PortMappingsInitialValues>;
}

export const PortMappingsForm = ({ form }: Props) => {
  const addPort = () => {
    form.setValues((prev) => ({
      ...prev,
      ports: [...prev.ports, { containerPort: '', hostPort: '', protocol: '' }]
    }));
  }

  const removePort = (index: number) => {
    form.setValues((prev) => ({
      ...prev,
      ports: prev.ports.filter((_, i) => i !== index)
    }));
  }

  return (
    <fieldset>
      {form.values.ports.map((_, index) => (
        <div key={index}>
          <input {...form.register(`ports.${index}.containerPort`)} />
          <input {...form.register(`ports.${index}.hostPort`)} />
          <input {...form.register(`ports.${index}.protocol`)} />
          <button type="button" onClick={() => removePort(index)}>Remove port</button>
        </div>
      ))}
      <button type="button" onClick={addPort}>
        Add port
      </button>
    </fieldset>
  );
};