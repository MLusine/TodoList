import { useState } from "react";

const TodoList = () => {
  const [data, setData] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    setTodos([...todos, { text: data, checked: false }]);
    setData("");
    localStorage.setItem("Todo", data);
  };
  const handleCheck = (index) => {
    const updateTodos = todos.map((todo, i) =>
      i == index ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(updateTodos);
  };
  const handleDelete = (index) => {
    setTodos(todos.filter((todo, ind) => ind != index));
  };

  return (
    <div>
      <textarea value={data} onChange={(e) => setData(e.target.value)} />
      <button onClick={handleAdd}> Add Todo</button>
      <ol>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.checked ? <s>todo.text </s> : todo.text}
            <button onClick={() => handleCheck(index)}>
              {todo.checked ? "Uncheck" : "Check"}
            </button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
};
export default TodoList;
