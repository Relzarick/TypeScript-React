import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onDelete: () => void;
  editTodo: () => void;
}

export const TodoCard = ({ children, ...functions }: Props) => {
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button onClick={functions.editTodo}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>

        <button onClick={functions.onDelete}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
};
