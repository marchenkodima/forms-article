import * as yup from 'yup';

import { useForm } from "@/utils/useForm";

import { ContainerDetailsInitialValues } from "./types";

const containerDetailsValidationSchema = yup.object().shape({
  containerName: yup.string().required().label('Container Name'),
});

type Props = {
  initialValues: ContainerDetailsInitialValues;
}

export const useContainerDetailsForm = ({ initialValues }: Props) => {
  const form = useForm({
    initialValues,
    validationSchema: containerDetailsValidationSchema,
  });

  return form;
};