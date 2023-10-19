import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import Add from "./Add";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";


function Assignment3() {
  return (
    <div>
      <h1>Assignment 3</h1>
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