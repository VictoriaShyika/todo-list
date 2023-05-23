import styled from 'styled-components';
import { COLORS } from '../../lib/theme';

export const TodoCard = styled.div`
  width: 100%;
  padding: 20px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(17, 7, 27, 0.17);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  box-sizing: border-box;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.p`
  font-size: 18px;
`;

export const Description = styled.p`
  font-size: 14px;
  padding-left: 30px;
`;

export const Button = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 200px;
  border: none;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.buttonDark};
  color: white;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.dark};
  }
`;
