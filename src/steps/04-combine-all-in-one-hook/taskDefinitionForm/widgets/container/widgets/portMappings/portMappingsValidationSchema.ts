import * as yup from 'yup';

export const portMappingsValidationSchema = yup.object().shape({
  ports: yup.array().of(
    yup.object().shape({
      containerPort: yup.string().required('Container port is required'),
      hostPort: yup.string().required('Host port is required'),
      protocol: yup.string().required('Protocol is required'),
    }),
  ),
});