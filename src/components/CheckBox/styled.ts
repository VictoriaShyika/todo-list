import styled from 'styled-components';
import { COLORS } from '../../lib/theme';

export const Input = styled.input`
  height: 20px;
  width: 20px;
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  border: 1px solid ${COLORS.dark};
  border-radius: 0.15em;
  transform: translateY(-0.075em);
  cursor: pointer;
  display: grid;
  place-content: center;

  &::before {
    content: '';
    height: 14px;
    width: 14px;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    background: ${COLORS.dark};
    transform-origin: bottom left;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  }

  &:checked::before {
    transform: scale(1);
  }
`;
