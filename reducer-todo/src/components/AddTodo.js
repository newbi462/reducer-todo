import React, { useContext, useReducer } from 'react';

import { reducer, initialState } from "./../reducers/reducer";

import { NotAddedContext } from "./../contexts/NotAddedContext";

export const AddTodo = () => {
  const [unAdded, setUnAdded] = useContext(NotAddedContext);
  const [state, dispatch] = useReducer(reducer, initialState)

  const addTodos = () => {
    //
  };

	return (
		<>
    add to do
    <input placeholder="New To Do" onChange={(e) => {
      setUnAdded(e.target.value);
    }} />
    <button onClick={() => {
      dispatch({ type: "NEWTODO", payload: unAdded });
      console.log("I ran");
    }}>Add to List</button>
		</>
	);
};
