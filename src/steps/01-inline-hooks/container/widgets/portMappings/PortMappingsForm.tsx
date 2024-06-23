import { usePortMappingsForm } from "./usePortMappingsForm";

export const PortMappingsForm = () => {
  const portMappingsForm = usePortMappingsForm({
    initialValues: {
      ports: [{ containerPort: '', hostPort: '', protocol: '' }],
    },
  });

  const addPort = () => {
    portMappingsForm.setValues((prev) => ({
      ...prev,
      ports: [...prev.ports, { containerPort: '', hostPort: '', protocol: '' }]
    }));
  }

  const removePort = (index: number) => {
    portMappingsForm.setValues((prev) => ({
      ...prev,
      ports: prev.ports.filter((_, i) => i !== index)
    }));
  }

  return (
    <fieldset>
      {portMappingsForm.values.ports.map((_, index) => (
        <div key={index}>
          <input {...portMappingsForm.register(`ports.${index}.containerPort`)} />
          <input {...portMappingsForm.register(`ports.${index}.hostPort`)} />
          <input {...portMappingsForm.register(`ports.${index}.protocol`)} />
          <button type="button" onClick={() => removePort(index)}>Remove port</button>
        </div>
      ))}
      <button type="button" onClick={addPort}>
        Add port
      </button>
    </fieldset>
  );
};