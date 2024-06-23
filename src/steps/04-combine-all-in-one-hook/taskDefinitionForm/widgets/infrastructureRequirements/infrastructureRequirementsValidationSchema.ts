import * as yup from 'yup';

export const infrastructureRequirementsValidationSchema = yup.object().shape({
  taskSize: yup.object().shape({
    cpu: yup.string().required('Required'),
    memory: yup.string().required('Required'),
  }),
});