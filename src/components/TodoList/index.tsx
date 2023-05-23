import { FC } from 'react';
import { TodoItem } from '../TodoItem';
import { TODO_ITEM_DATA } from '../../data/todo-iteam';
import { EmptyText, Wrapper } from './styled';
import { SortingData } from '../../helpers/sordedTodos';

export const TodoList: FC<{ todos: TODO_ITEM_DATA[] }> = ({ todos }) => {
  return (
    <Wrapper>
      {todos.length ? (
        SortingData(todos).map((item: TODO_ITEM_DATA) => (
          <TodoItem
            title={item.title}
            description={item.description}
            isChecked={item.isChecked}
            id={item.id}
            key={item.id}
          />
        ))
      ) : (
        <EmptyText>Todos list is empty =)</EmptyText>
      )}
    </Wrapper>
  );
};
