import React from "react";
import { TaskDefinitionFormController } from "./TaskDefinitionFormController";
import { ContainersForm } from "./widgets/container/ContainersForm";
import { InfrastructureRequirementsForm } from "./widgets/infrastructureRequirements";
import { observer } from "mobx-react";

export const TaskDefinitionForm = observer(() => {
  const [formController] = React.useState(() =>
    new TaskDefinitionFormController({
      containers: [
        {
          containerDetails: {
            containerName: "nginx",
          },
          portMappings: [
            {
              containerPort: 80,
              hostPort: 8080,
              protocol: "tcp",
            },
          ],
        },
      ],
      infrastructureRequirements: {
        taskSize: {
          cpu: "0.25",
          memory: "512",
        },
      },
    })
  );

  return (
    <form>
      <ContainersForm formController={formController.controls.containers} />
      <InfrastructureRequirementsForm formController={formController.controls.infrastructureRequirements} />
    </form>
  );
});