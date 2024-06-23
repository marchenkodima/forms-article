import * as yup from 'yup';

import { useForm } from "@/utils/useForm";

import { InfrastructureRequirementsInitialValues } from "./types";

const infrastructureRequirementsValidationSchema = yup.object().shape({
  taskSize: yup.object().shape({
    cpu: yup.string().required('Required'),
    memory: yup.string().required('Required'),
  }),
});

type Props = {
  initialValues: InfrastructureRequirementsInitialValues;
}

export const useInfrastructureRequirementsForm = ({ initialValues }: Props) => {
  const form = useForm({
    initialValues,
    validationSchema: infrastructureRequirementsValidationSchema,
  });

  return form;
};