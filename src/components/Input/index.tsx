import { FC } from 'react';
import { Wrapper, StyledInput, ErrorText } from './styled';

interface Props {
  id: string;
  name?: string;
  placeholder?: string;
  validate?: Function;
  error?: string | null;
}

export const Input: FC<Props> = ({
  id,
  name,
  placeholder,
  validate,
  error,
}) => {
  return (
    <Wrapper>
      <StyledInput
        id={id}
        name={name}
        placeholder={placeholder}
        validate={validate}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </Wrapper>
  );
};
