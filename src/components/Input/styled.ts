import { Field } from 'formik';
import styled from 'styled-components';
import { COLORS } from '../../lib/theme';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StyledInput = styled(Field)`
  width: 100%;
  border: 1px solid ${COLORS.inputBorder};
  border-radius: 12px;
  height: 40px;
  box-sizing: border-box;
  padding: 8px 12px 8px 20px;
  width: 100%;
  outline: none;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0px 4px 20px rgba(17, 7, 27, 0.17);

  :focus-within {
    border: 1px solid ${COLORS.dark};
    transition: border 0.5s;
  }
`;

export const ErrorText = styled.p`
  font-size: 12px;
  color: ${COLORS.warmGray};
`;
