import { FC } from 'react';
import { CheckBox } from '../CheckBox';
import { TODO_ITEM_DATA } from '../../data/todo-iteam';
import { useActions } from '../../hooks/useAction';
import {
  TodoCard,
  Wrapper,
  Container,
  Title,
  Button,
  Description,
} from './styled';

export const TodoItem: FC<TODO_ITEM_DATA> = ({
  title,
  description,
  isChecked,
  id,
}) => {
  const { changeTodoStatus, deleteTodo } = useActions();

  return (
    <TodoCard>
      <Wrapper>
        <Container>
          <CheckBox
            isChecked={isChecked}
            onClick={() => changeTodoStatus(!isChecked, id)}
          />
          <Title>{title}</Title>
        </Container>
        <Button onClick={() => deleteTodo(id)}>✖</Button>
      </Wrapper>

      <Description>{description}</Description>
    </TodoCard>
  );
};
