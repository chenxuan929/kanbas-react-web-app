import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import Add from "./Add";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";
import { useSelector } from "react-redux";


function Assignment3() {
  const { todos } = useSelector((state) => state.todosReducer);

  return (
    <div>
      <h1>Assignment 3</h1>
      <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>


      <TodoList />
      <hr />

      <ul className="list-group">
        <TodoItem
          todo={{
            title: "Buy milk",
            done: true,
            status: "COMPLETE",
          }}
        />
        <TodoItem
          todo={{
            title: "Pick up kids",
            done: false,
            status: "COMPLETE",
          }}
        />
        <TodoItem
          todo={{
            title: "Get the oil",
            done: false,
            status: "COMPLETE",
          }}
        />
      </ul>
      <hr />

      <TodoItem />
      <ConditionalOutput />
      <Styles />
      <PathParameters />
      <Add />
      <Classes />
      <JavaScript />
    </div>
  );
}
export default Assignment3;