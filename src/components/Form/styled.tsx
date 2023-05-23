import { Form } from 'formik';
import styled from 'styled-components';
import { COLORS } from '../../lib/theme';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export const Button = styled.button`
  background-color: ${COLORS.buttonDark};
  border: none;
  border-radius: 12px;
  height: 40px;
  box-sizing: border-box;
  padding: 8px 12px 8px 20px;
  width: 100%;
  outline: none;
  font-size: 14px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.dark};
  }
`;
export const Title = styled.p`
  font-size: 22px;
  font-weight: 500;
`;
