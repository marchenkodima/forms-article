import { useTaskDefinitionForm } from "./useTaskDefinitionForm";
import { ContainerForm } from "./widgets/container/ContainerForm";
import { InfrastructureRequirementsForm } from "./widgets/infrastructureRequirements";

export const TaskDefinitionForm = () => {
  const taskDefinitionForm = useTaskDefinitionForm({
    initialValues: {
      containers: [{
        containerDetails: {
          containerName: '',
        },
        portMappings: [{
          containerPort: 0,
          hostPort: 0,
          protocol: '',
        }],
      }],
      infrastructureRequirements: {
        taskSize: {
          cpu: '',
          memory: '',
        },
      },
    },
  });

  return (
    <form>
      {taskDefinitionForm.values.containers.map((_, containerIndex) => (
        <ContainerForm form={taskDefinitionForm} containerIndex={containerIndex} />
      ))}
      <InfrastructureRequirementsForm form={taskDefinitionForm} />
    </form>
  );
};