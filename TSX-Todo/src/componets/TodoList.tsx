import { TodoCard } from "./TodoCard";

interface Props {
  listItem: string[];
  handleDelete: (index: number) => void;
  handleEdit: (index: number) => void;
}

export const TodoList = ({ listItem, handleDelete, handleEdit }: Props) => {
  return (
    <ul className="main">
      {listItem.map((item, i) => {
        return (
          <TodoCard
            onDelete={() => {
              handleDelete(i);
            }}
            editTodo={() => {
              handleEdit(i);
            }}
            key={i}
          >
            {item}
          </TodoCard>
        );
      })}
    </ul>
  );
};
