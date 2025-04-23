import { useState, useEffect } from "react";
import { TodoInput } from "./componets/TodoInput";
import { TodoList } from "./componets/TodoList";

function App() {
  const [todos, setTodo] = useState<string[]>([]);
  const [todoVal, setTodoVal] = useState("");

  //* Adding New List Items
  const addTodo = (newTodo: string) => {
    const newTodoList = [...todos, newTodo];

    setStorage(newTodoList);
    setTodo(newTodoList);
  };

  //* Delete List Items
  const onDelete = (index: number) => {
    const newTodoList = todos.filter((_, todoIndex) => {
      return todoIndex !== index;
    });

    setStorage(newTodoList);
    setTodo(newTodoList);
  };

  //* Edit List Items
  const editTodo = (index: number) => {
    const valToEdit = todos[index];
    setTodoVal(valToEdit);
    onDelete(index);
  };

  const setStorage = (newList: string[]) => {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  };

  useEffect(() => {
    const localTodo = localStorage.getItem("todos");
    if (!localTodo) {
      return;
    }

    const parsedData = JSON.parse(localTodo).todos;
    setTodo(parsedData);
  }, []);

  return (
    <>
      <TodoInput todoVal={todoVal} setTodoVal={setTodoVal} handleNewTodos={addTodo} />
      <TodoList handleEdit={editTodo} handleDelete={onDelete} listItem={todos} />
    </>
  );
}

export default App;
