import styled from 'styled-components';
import { TodoForm } from './components/Form';
import { TodoList } from './components/TodoList';
import { useTypedSelector } from './hooks/useTypedSelector';

function App() {
  const todos = useTypedSelector((state) => state);

  return (
    <Wrapper>
      <TodoForm />
      <TodoList todos={todos} />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 800px;
  padding: 20px;
  gap: 20px;

  @media all and (max-width: 850px) {
    max-width: 500px;
    min-width: 500px;
  }
  @media all and (max-width: 550px) {
    max-width: 350px;
    min-width: 350px;
  }
`;

export default App;
