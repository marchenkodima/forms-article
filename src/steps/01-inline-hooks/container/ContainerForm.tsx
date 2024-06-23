import { ContainerDetailsForm } from "./widgets/containerDetails";
import { PortMappingsForm } from "./widgets/portMappings";

export const ContainerForm = () => {
  return (
    <fieldset>
      <ContainerDetailsForm />
      <PortMappingsForm />
    </fieldset>
  );
};