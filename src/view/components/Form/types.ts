import { FormikConfig } from 'formik';
import * as React from 'react';
import { FormikProps } from 'formik/dist/types';

export type FormProps<Values> = Omit<FormikConfig<Values>, 'children'> & {
  children: (props: FormikProps<Values>) => React.ReactNode;
};
