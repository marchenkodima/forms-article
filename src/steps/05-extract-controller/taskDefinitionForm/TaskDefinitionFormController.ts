import { FormGroup } from "../form";

import { ContainersController } from "./widgets/container/ContainersController";
import { InfrastructureRequirementsController } from "./widgets/infrastructureRequirements/InfrastructureRequirementsController";

export type TaskDefinitionInitialValues = {
  containers: {
    containerDetails: {
      containerName: string;
    };
    portMappings: {
      containerPort: number;
      hostPort: number;
      protocol: string;
    }[];
  }[];
  infrastructureRequirements: {
    taskSize: {
      cpu: string;
      memory: string;
    };
  };
};

export class TaskDefinitionFormController extends FormGroup<{
  containers: ContainersController;
  infrastructureRequirements: InfrastructureRequirementsController;
}> {
  constructor(initialValues: TaskDefinitionInitialValues) {
    super({
      containers: new ContainersController(initialValues.containers),
      infrastructureRequirements: new InfrastructureRequirementsController({
        taskSize: {
          cpu: initialValues.infrastructureRequirements.taskSize.cpu,
          memory: initialValues.infrastructureRequirements.taskSize.memory,
        },
      }),
    });
  }
}