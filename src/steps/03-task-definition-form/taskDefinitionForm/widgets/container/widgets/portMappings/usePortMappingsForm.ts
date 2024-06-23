import * as yup from 'yup';

import { useForm } from "@/utils/useForm";

import { PortMappingsInitialValues } from "./types";

const portMappingsValidationSchema = yup.object().shape({
  ports: yup.array().of(
    yup.object().shape({
      containerPort: yup.string().required('Container port is required'),
      hostPort: yup.string().required('Host port is required'),
      protocol: yup.string().required('Protocol is required'),
    }),
  ),
});

type Props = {
  initialValues: PortMappingsInitialValues;
}

export const usePortMappingsForm = ({ initialValues }: Props) => {
  const form = useForm({
    initialValues,
    validationSchema: portMappingsValidationSchema,
  });

  return form;
};