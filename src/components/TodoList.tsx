import { Todo } from '../types/Todo';
import { ActualTodo } from './ActualTodo';

interface Props {
  todos: Todo[],
}

export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <section className="todoapp__main" data-cy="TodoList">
      {todos.map(todo => (
        <ActualTodo
          key={todo.id}
          todo={todo}
        />
      ))}
    </section>
  );
};
