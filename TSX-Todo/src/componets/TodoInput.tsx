interface Props {
  handleNewTodos: (todo: string) => void;
  todoVal: string;
  setTodoVal: (todo: string) => void;
}

export const TodoInput = ({ handleNewTodos, todoVal, setTodoVal }: Props) => {
  return (
    <header>
      <input
        value={todoVal}
        onChange={(e) => {
          setTodoVal(e.target.value);
        }}
        placeholder="Enter todo..."
      />
      <button
        type="button"
        onClick={() => {
          handleNewTodos(todoVal);
          setTodoVal("");
        }}
      >
        Add
      </button>
    </header>
  );
};
