import React from 'react';
import { Formik, Form as FormikForm } from 'formik';
import { FormProps } from './types';

function Form<Values>({ children, ...restProps }: FormProps<Values>) {
  return (
    <Formik {...restProps}>
      {(...renderProps) => <FormikForm>{children(...renderProps)}</FormikForm>}
    </Formik>
  );
}

export { Form };
