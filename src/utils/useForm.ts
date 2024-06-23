/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import * as yup from 'yup';
import { FormikErrors, useFormik } from 'formik';

type FormInitialProps<T extends object> = {
  initialValues: T;
  validationSchema: yup.ObjectSchema<any>;
}

type InteractiveElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

export type Form<T> = {
  register: (name: string) => {
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<InteractiveElement>) => void;
    onBlur: (e: React.FocusEvent) => void;
  };
  values: T;
  errors: any;
  touched: any;
  validate: () => Promise<FormikErrors<T>>;
  setValues: React.Dispatch<React.SetStateAction<T>>;
}

export const useForm = <T extends object>({ initialValues, validationSchema }: FormInitialProps<T>): Form<T> => {
  const form = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {},
  });

  return {
    register: form.getFieldProps,
    values: form.values,
    errors: form.errors,
    touched: form.touched,
    validate: form.validateForm,
    setValues: form.setValues as React.Dispatch<React.SetStateAction<T>>,
  };
}