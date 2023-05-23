import { FC } from 'react';
import { Input } from './styled';

interface PropsI {
  onClick: any;
  isChecked?: boolean;
}

export const CheckBox: FC<PropsI> = ({ onClick, isChecked }) => {
  return <Input type="checkbox" onClick={onClick} defaultChecked={isChecked} />;
};
