import React, { useReducer, useContext } from 'react';

import { reducer, initialState } from "./../reducers/reducer";

import { NotAddedContext } from "./../contexts/NotAddedContext";

export const RenderToDo = () => {
  const [unAdded, setUnAdded] = useContext(NotAddedContext);
  const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<>
    Tap item to toggle done undone
    <ul>
    {state.map(function( item, index ) {
        return (
          <>
          <li
            className={item.completed.toString()}
            key={index}
            onClick={() => {
              dispatch({ type: "TOGGLEDONE", payload: index });
            }}
          >{item.item}</li>
          </>
        );
      })}
      <li>{unAdded}</li>
      </ul>

      add to do
      <input placeholder="New To Do" onChange={(e) => {
        setUnAdded(e.target.value);
      }} />
      <button onClick={() => {
        dispatch({ type: "NEWTODO", payload: unAdded });
      }}>Add to List</button>

      <button onClick={() => {
        dispatch({ type: "CLEARDONE" });
      }}>Clear Done</button>
		</>
	);
};
