import { FC } from 'react';
import { Formik, FormikValues } from 'formik';
import { useActions } from '../../hooks/useAction';
import { Input } from '../Input';
import { initialValues, FormSchema } from './utils';
import { Button, StyledForm, Title } from './styled';

export const TodoForm = () => {
  const { addingTodo } = useActions();

  const onSubmit = (values: FormikValues, { resetForm }: any) => {
    const { title, description } = values;
    addingTodo(title, description, new Date().toISOString());
    resetForm({ values: '' });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={FormSchema}
    >
      {({ errors, touched }) => (
        <StyledForm>
          <Title>Create todo</Title>

          <Input
            id="title"
            name="title"
            placeholder="Title"
            error={errors.title && touched.title ? errors.title : null}
          />
          <Input
            id="description"
            name="description"
            placeholder="Description"
          />

          <Button type="submit">Add</Button>
        </StyledForm>
      )}
    </Formik>
  );
};
