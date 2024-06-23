import * as yup from 'yup';

import { useForm } from "@/utils/useForm";

import { TaskDefinitionInitialValues } from "./types";
import { infrastructureRequirementsValidationSchema } from "./widgets/infrastructureRequirements";
import { portMappingsValidationSchema } from "./widgets/container/widgets/portMappings";
import { containerDetailsValidationSchema } from "./widgets/container/widgets/containerDetails";

const taskDefinitionFormValidationSchema = yup.object().shape({
  containers: yup.object().shape({
    containerDetails: containerDetailsValidationSchema,
    portMappings: portMappingsValidationSchema,
  }),
  infrastructureRequirements: infrastructureRequirementsValidationSchema,
});

type Props = {
  initialValues: TaskDefinitionInitialValues;
}

export const useTaskDefinitionForm = ({ initialValues }: Props) => {
  const form = useForm({
    initialValues,
    validationSchema: taskDefinitionFormValidationSchema,
  });

  return form;
};