import { ContainerDetailsForm, useContainerDetailsForm } from "./widgets/containerDetails";
import { PortMappingsForm, usePortMappingsForm } from "./widgets/portMappings";

export const ContainerForm = () => {
  const containerDetailsForm = useContainerDetailsForm({
    initialValues: {
      containerName: ''
    },
  });
  const portMappingsForm = usePortMappingsForm({
    initialValues: {
      ports: [{ containerPort: '', hostPort: '', protocol: '' }],
    },
  });

  const validate = async () => {
    const containerDetailsErrors = await containerDetailsForm.validate();
    const portMappingsErrors = await portMappingsForm.validate();
    console.log(containerDetailsErrors, portMappingsErrors);
  }

  return (
    <fieldset>
      <ContainerDetailsForm form={containerDetailsForm} />
      <PortMappingsForm form={portMappingsForm} />
      <button type="button" onClick={validate}>Validate</button>
    </fieldset>
  );
};