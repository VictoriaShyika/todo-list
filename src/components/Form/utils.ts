import * as Yup from 'yup';

export const FormSchema = Yup.object().shape({
  title: Yup.string().required('This field is required'),
});

export interface FormikValues {
  title: string;
  description: string;
}

export const initialValues = {
  title: '',
  description: '',
};
