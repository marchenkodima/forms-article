import { ContainerForm } from "./widgets/container/ContainerForm";
import { InfrastructureRequirementsForm, useInfrastructureRequirementsForm } from "./widgets/infrastructureRequirements";

export const TaskDefinitionForm = () => {
  const infrastructureRequirementsForm = useInfrastructureRequirementsForm({
    initialValues: {
      taskSize: {
        cpu: '',
        memory: '',
      },
    },
  });

  return (
    <form>
      {/* this needs to be a list */}
      <ContainerForm />
      <InfrastructureRequirementsForm form={infrastructureRequirementsForm} />
    </form>
  );
};