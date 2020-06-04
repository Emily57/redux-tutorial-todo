import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

export const AddTodo = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const updateInput = (input) => {
    setInput(input);
  };

  const handleAddTodo = () => {
    // dispatches actions to add todo
    dispatch(addTodo(input));

    // sets state back to empty string
    setInput("");
  };

  return (
    <div>
      <input onChange={(e) => updateInput(e.target.value)} value={input} />
      <button className="add-todo" onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
};
