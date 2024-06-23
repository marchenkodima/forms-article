import * as yup from 'yup';

export const containerDetailsValidationSchema = yup.object().shape({
  containerName: yup.string().required().label('Container Name'),
});