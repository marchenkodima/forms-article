export type PortMappingsInitialValues = {
  ports: {
    containerPort: string;
    hostPort: string;
    protocol: string;
  }[];
};