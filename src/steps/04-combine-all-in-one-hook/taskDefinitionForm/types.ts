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